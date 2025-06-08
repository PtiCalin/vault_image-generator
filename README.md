# 📸 Vault Image Generator Plugin

> _Create images from your notes with a modular Obsidian plugin._

Welcome to the Vault Image Generator plugin for Obsidian, built with PtiCalin flair.
This repo provides the scaffold and features needed to generate images right inside your vault.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status: WIP](https://img.shields.io/badge/status-WIP-yellow.svg)](WIP)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./.github/PULL_REQUEST_TEMPLATE.md)
[![GitHub Discussions](https://img.shields.io/badge/💬-Discussions-blueviolet?logo=github)](https://github.com/PtiCalin/vault_image-generator/discussions)
[![Sponsor PtiCalin](https://img.shields.io/badge/Sponsor-💖-f06292.svg?logo=githubsponsors)](https://github.com/sponsors/PtiCalin)

---

## 🧰 Features

- 🖼 Generate images from text prompts directly inside Obsidian
- 🤖 Powered by [Ollama](https://ollama.ai/) for local AI image generation
- ⚙️ VaultOS-ready modular structure (`src/`, `ops/`, `config/`, `dist/`)
- 📦 Rollup build system with `manifest.json`
- 📁 Ready-to-use GitHub Actions and PR templates
- 💬 Discussions and sponsor links for community-driven growth

---

## 🚀 Getting Started

Clone this repository to start using the image generator plugin:

```bash
git clone https://github.com/PtiCalin/vault_image-generator.git
cd vault_image-generator
```

For an automated setup you can simply run:

```bash
./setup.sh
```

### 🛠 Local Setup

Install dependencies and bundle the plugin:

```bash
npm install
npm run build
```

During development you can watch the files and rebuild on changes with:

```bash
npm run dev
```

After building, copy the contents of `/dist` into your Obsidian vault’s `.obsidian/plugins/` folder.

The plugin uses Ollama locally. You can configure the model and output folder from the plugin settings inside Obsidian.

---

## 🧱 Folder Structure

```plaintext
src/           → TypeScript plugin source
dist/          → Compiled output used by Obsidian
ops/           → Plugin orchestration logic
config/        → Static metadata and module configs
.github/       → GitHub Actions, PR/issue templates
```

---

## 🤝 Contributing

We welcome contributions of all kinds!

Use our templates to get started:

- [🐛 Bug Reports](./.github/ISSUE_TEMPLATE/bug_report.md)
- [🌟 Feature Requests](./.github/ISSUE_TEMPLATE/feature_request.md)
- [📦 Pull Requests](./.github/PULL_REQUEST_TEMPLATE.md)

Read our [CONTRIBUTING.md](CONTRIBUTING.md) for more info, or start a conversation in [💬 GitHub Discussions](https://github.com/PtiCalin/vault_image-generator/discussions).

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).  
Use freely, fork creatively — just spread the love.

---

## 💌 Sponsor

If this plugin sparks creativity or helps you generate visuals, consider sponsoring here:
[**github.com/sponsors/PtiCalin**](https://github.com/sponsors/PtiCalin)

---

Have fun building, and spend less time structuring!
