# Web3 Phaser Game Template 🎮 

A modern, ready-to-use template for building Web3 games using Phaser.js with seamless wallet integration. This template combines the power of Phaser.js game framework with Web3 capabilities, allowing developers to create blockchain-integrated games quickly and efficiently.

## ✨ Features

- **Phaser.js Integration** - Built on top of Phaser 3, a fast and powerful HTML5 game framework
- **Web3 Ready** - Seamless wallet connection using wagmi core
- **TypeScript Support** - Full TypeScript support for better development experience
- **Modern Stack** - Built with modern web technologies and best practices
- **Responsive Design** - Adaptable to different screen sizes
- **Easy to Extend** - Modular architecture makes it easy to add new features

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm / yarn / pnpm / bun
- A Web3 wallet (e.g., MetaMask)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web3-phaser-template.git
cd web3-phaser-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or 
pnpm install 
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or 
pnpm dev 
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
web3-phaser-template/
├── src/
│   ├── scenes/         # Phaser game scenes
│   ├── config/         # Configuration files
│   ├── components/     # React components (if any)
│   └── assets/         # Game assets
├── public/             # Static files
└── package.json
```

## 🔧 Configuration

### Web3 Configuration

The Web3 configuration can be found in `src/config/wagmiConfig.ts`. You can modify this file to:
- Change the supported networks
- Add custom RPC endpoints
- Configure wallet connection settings

### Game Configuration

Basic game settings can be modified in the Phaser game configuration file.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Phaser.js](https://phaser.io/)
- [wagmi](https://wagmi.sh/)

---

<p align="center">🎮 Made Your Web3 Gaming 🎮</p> 