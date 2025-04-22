import Phaser from 'phaser';
import { config } from '../config/wagmiConfig';
import { connect, disconnect } from '@wagmi/core'
import { injected } from '@wagmi/connectors'
export class MainScene extends Phaser.Scene {
  private button!: Phaser.GameObjects.Text;
  private addressText!: Phaser.GameObjects.Text;
  private gameWidth!: number;
  private gameHeight!: number;
  private isConnected: boolean = false;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.gameWidth = this.scale.width;
    this.gameHeight = this.scale.height;

    this.cameras.main.setBackgroundColor('#2d2d2d');

    // Add address text below the button
    this.addressText = this.add.text(this.gameWidth / 2, (this.gameHeight / 2) + 50, '', {
      fontSize: '16px',
      color: '#fff',
      align: 'center'
    })
    .setOrigin(0.5)
    .setDepth(1);

    this.button = this.add.text(this.gameWidth / 2, this.gameHeight / 2, 'Connect Wallet', {
      fontSize: '32px',
      color: '#fff',
      backgroundColor: '#333',
      padding: { x: 20, y: 10 }
    })
    .setOrigin(0.5)
    .setInteractive()
    .on('pointerover', () => {
      this.game.canvas.style.cursor = 'pointer';
    })
    .on('pointerout', () => {
      this.game.canvas.style.cursor = 'default';
    })
    .on('pointerdown', async () => {
      if (!this.isConnected) {
        console.log('Connecting to wallet...');
        try {
          const result = await connect(config, { connector: injected() })
          console.log('Connected to wallet:', result)
          // Update the address text
          const shortAddress = `${result.accounts[0].slice(0, 6)}...${result.accounts[0].slice(-4)}`;
          this.addressText.setText(`Connected: ${shortAddress}`);
          // Change button text to show connected state
          this.button.setText('Disconnect');
          this.button.setStyle({ backgroundColor: '#2a9d8f' });
          this.isConnected = true;
        } catch (error) {
          console.error('Failed to connect wallet:', error);
        }
      } else {
        // Use wagmi disconnect
        try {
          await disconnect(config)
          // Reset UI state
          this.addressText.setText('');
          this.button.setText('Connect Wallet');
          this.button.setStyle({ backgroundColor: '#333' });
          this.isConnected = false;
        } catch (error) {
          console.error('Failed to disconnect wallet:', error);
        }
      }
    })
    .setDepth(1);
  }

  update() {
  }
}
