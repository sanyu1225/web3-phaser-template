import Phaser from 'phaser';
import { config } from '../config/wagmiConfig';
import { connect, disconnect } from '@wagmi/core'
import { injected } from '@wagmi/connectors'

export class MainScene extends Phaser.Scene {
  private button!: Phaser.GameObjects.Text;
  private addressText!: Phaser.GameObjects.Text;
  private loadingText!: Phaser.GameObjects.Text;
  private gameWidth!: number;
  private gameHeight!: number;
  private isConnected: boolean = false;
  private isProcessing: boolean = false;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.gameWidth = this.scale.width;
    this.gameHeight = this.scale.height;
    this.cameras.main.setBackgroundColor('#2d2d2d');

    this.createUI();
    this.setupWalletButton();
  }

  private createUI() {
    // Create loading text (initially hidden)
    this.loadingText = this.add.text(this.gameWidth / 2, (this.gameHeight / 2) + 100, '', {
      fontSize: '16px',
      color: '#ffd700',
      align: 'center'
    })
    .setOrigin(0.5)
    .setDepth(1)
    .setVisible(false);

    // Create address text
    this.addressText = this.add.text(this.gameWidth / 2, (this.gameHeight / 2) + 50, '', {
      fontSize: '16px',
      color: '#fff',
      align: 'center'
    })
    .setOrigin(0.5)
    .setDepth(1);

    // Create main button
    this.button = this.add.text(this.gameWidth / 2, this.gameHeight / 2, 'Connect Wallet', {
      fontSize: '32px',
      color: '#fff',
      backgroundColor: '#333',
      padding: { x: 20, y: 10 }
    })
    .setOrigin(0.5)
    .setInteractive()
    .setDepth(1);
  }

  private setupWalletButton() {
    this.button
      .on('pointerover', () => {
        if (!this.isProcessing) {
          this.game.canvas.style.cursor = 'pointer';
          this.button.setStyle({ backgroundColor: '#444' });
        }
      })
      .on('pointerout', () => {
        this.game.canvas.style.cursor = 'default';
        this.button.setStyle({ 
          backgroundColor: this.isConnected ? '#2a9d8f' : '#333' 
        });
      })
      .on('pointerdown', async () => {
        if (this.isProcessing) return;
        await this.handleWalletConnection();
      });
  }

  private async handleWalletConnection() {
    this.isProcessing = true;
    this.showLoading('Processing...');
    this.button.setStyle({ backgroundColor: '#666' });

    try {
      if (!this.isConnected) {
        await this.connectWallet();
      } else {
        await this.disconnectWallet();
      }
    } catch (error) {
      this.handleError(error);
    } finally {
      this.isProcessing = false;
      this.hideLoading();
      this.button.setStyle({ 
        backgroundColor: this.isConnected ? '#2a9d8f' : '#333' 
      });
    }
  }

  private async connectWallet() {
    const result = await connect(config, { connector: injected() });
    const shortAddress = `${result.accounts[0].slice(0, 6)}...${result.accounts[0].slice(-4)}`;
    this.updateUIForConnectedState(shortAddress);
    this.isConnected = true;
  }

  private async disconnectWallet() {
    await disconnect(config);
    this.updateUIForDisconnectedState();
    this.isConnected = false;
  }

  private updateUIForConnectedState(address: string) {
    this.addressText.setText(`Connected: ${address}`);
    this.button.setText('Disconnect');
    this.button.setStyle({ backgroundColor: '#2a9d8f' });
  }

  private updateUIForDisconnectedState() {
    this.addressText.setText('');
    this.button.setText('Connect Wallet');
    this.button.setStyle({ backgroundColor: '#333' });
  }

  private showLoading(message: string) {
    this.loadingText.setText(message);
    this.loadingText.setVisible(true);
  }

  private hideLoading() {
    this.loadingText.setVisible(false);
  }

  private handleError(error: any) {
    console.error('Wallet operation failed:', error);
    const errorMessage = error instanceof Error ? error.message : 'Operation failed';
    this.showLoading(`Error: ${errorMessage}`);
    // Hide error message after 3 seconds
    this.time.delayedCall(3000, () => this.hideLoading());
  }

  update() {
    // Update logic if needed
  }
}
