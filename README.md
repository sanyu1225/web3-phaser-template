# Web3 Phaser Game Template 🎮 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Phaser](https://img.shields.io/badge/Phaser-3.60-blueviolet)](https://phaser.io/)
[![wagmi](https://img.shields.io/badge/wagmi-1.0-orange)](https://wagmi.sh/)

<div align="center">
  <img src="docs/assets/demo.gif" alt="Game Demo" width="600"/>
  <br/>
  <em>Build your next Web3 game with ease</em>
</div>

## 📖 Overview

Web3 Phaser Game Template 是一個現代化的開源模板，專門為開發者打造 Web3 遊戲而設計。這個模板完美結合了 Phaser.js 遊戲框架的強大功能和 Web3 技術，讓開發者能夠快速構建區塊鏈遊戲。

Web3 Phaser Game Template is a modern, open-source template designed specifically for developers to build Web3 games. This template seamlessly combines the power of the Phaser.js game framework with Web3 technology, enabling developers to quickly build blockchain games.

## ✨ Key Features

### 🎮 Game Development
- **Phaser.js Integration** - Built on top of Phaser 3, a fast and powerful HTML5 game framework
- **TypeScript Support** - Full TypeScript support for better development experience
- **Scene Management** - Well-organized scene structure for game states
- **Asset Management** - Efficient asset loading and management system
- **Responsive Design** - Adaptable to different screen sizes and devices

### 🔗 Web3 Integration
- **Wallet Connection** - Seamless wallet integration using wagmi core
- **Multi-chain Support** - Easy configuration for different blockchain networks
- **Smart Contract Integration** - Ready-to-use contract interaction utilities
- **Transaction Management** - Built-in transaction handling and status tracking

### 🛠️ Development Experience
- **Modern Stack** - Built with modern web technologies and best practices
- **Hot Reload** - Fast development with instant feedback
- **Modular Architecture** - Easy to extend and maintain
- **Comprehensive Documentation** - Detailed guides and API references

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm / yarn / pnpm / bun
- A Web3 wallet (e.g., MetaMask)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web3-phaser-template.git
cd web3-phaser-template
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

3. Start the development server:
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
web3-phaser-template/
├── src/
│   ├── scenes/           # Phaser game scenes
│   │   ├── BootScene.ts  # Initial loading scene
│   │   ├── MenuScene.ts  # Main menu scene
│   │   └── GameScene.ts  # Main game scene
│   ├── config/           # Configuration files
│   │   ├── gameConfig.ts # Phaser game configuration
│   │   └── wagmiConfig.ts # Web3 configuration
│   ├── components/       # React components
│   │   ├── Wallet/      # Wallet connection components
│   │   └── UI/          # Game UI components
│   ├── contracts/        # Smart contract ABIs and addresses
│   ├── utils/           # Utility functions
│   └── assets/          # Game assets
│       ├── images/      # Image assets
│       ├── audio/       # Audio assets
│       └── fonts/       # Font assets
├── public/              # Static files
├── docs/               # Documentation
├── tests/              # Test files
└── package.json
```

## 🔧 Configuration

### Web3 Configuration

The Web3 configuration can be found in `src/config/wagmiConfig.ts`. You can modify this file to:
- Change the supported networks
- Add custom RPC endpoints
- Configure wallet connection settings
- Set up contract addresses
- Customize transaction settings

### Game Configuration

Basic game settings can be modified in `src/config/gameConfig.ts`:
- Game resolution and scaling
- Physics settings
- Asset loading
- Scene management
- Input handling

## 📚 Documentation

For detailed documentation, please visit our [Documentation Site](https://docs.web3-phaser-template.com) or check the `docs` directory in this repository.

## 🤝 Contributing

We love your input! We want to make contributing to Web3 Phaser Game Template as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### Development Process

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Install dependencies (`npm install`)
4. Make your changes
5. Run tests (`npm test`)
6. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
7. Push to the Branch (`git push origin feature/AmazingFeature`)
8. Open a Pull Request

### Code Style

- We use ESLint and Prettier for code formatting
- Follow the TypeScript style guide
- Write meaningful commit messages
- Add tests for new features

## ❓ FAQ

### Common Questions

1. **Q: Which blockchain networks are supported?**  
   A: Currently, we support Ethereum, Polygon, and BSC. More networks can be added through configuration.

2. **Q: Can I use this template for commercial projects?**  
   A: Yes, this template is MIT licensed, which means you can use it for any purpose, including commercial projects.

3. **Q: How do I add my own smart contracts?**  
   A: Check the documentation in `docs/contracts.md` for detailed instructions.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Phaser.js](https://phaser.io/) - The amazing game framework
- [wagmi](https://wagmi.sh/) - The Web3 React hooks library
- [Vite](https://vitejs.dev/) - The build tool
- All our contributors and supporters


---

<p align="center">Made with ❤️ by the Web3 Gaming Community</p>
<p align="center">🎮 Start Building Your Web3 Game Today! 🎮</p> 