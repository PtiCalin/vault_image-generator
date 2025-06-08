// === src/main.ts ===
// Purpose: Obsidian plugin that sends text selections to Ollama and saves the resulting image.
// Dependencies: Obsidian API, fs/promises, config/default.ts, ops/ollama.ts.
// Output: Creates an image file in the configured output folder of the vault.
// Example: Select text, run "Generate Image with Ollama", then check the output directory for the new image.
import { App, Plugin, PluginSettingTab, Setting, Notice, MarkdownView, normalizePath } from 'obsidian';
import { DEFAULT_SETTINGS, PluginSettings } from '../config/default';
import { runOllama } from '../ops/ollama';
import * as fs from 'fs/promises';

export default class VaultImageGenerator extends Plugin {
  settings!: PluginSettings;

  async onload() {
    await this.loadSettings();

    this.addCommand({
      id: 'generate-image-with-ollama',
      name: 'Generate Image with Ollama',
      callback: () => this.generateFromSelection(),
    });

    this.addSettingTab(new ImageGeneratorSettingTab(this.app, this));
  }

  onunload() {}

  async generateFromSelection() {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view) {
      new Notice('No active markdown view');
      return;
    }
    const editor = view.editor;
    const prompt = editor.getSelection() || editor.getLine(editor.getCursor().line);

    const dir = normalizePath(this.settings.outputDir);
    await fs.mkdir(dir, { recursive: true });
    const filePath = normalizePath(`${dir}/${Date.now()}.png`);

    try {
      await runOllama(this.settings.model, prompt, filePath);
      const data = await fs.readFile(filePath);
      await this.app.vault.createBinary(filePath, data);
      new Notice(`Image saved to ${filePath}`);
    } catch (err) {
      console.error(err);
      new Notice('Failed to generate image');
    }
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class ImageGeneratorSettingTab extends PluginSettingTab {
  plugin: VaultImageGenerator;

  constructor(app: App, plugin: VaultImageGenerator) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this as any;
    containerEl.empty();

    new Setting(containerEl)
      .setName('Ollama model')
      .setDesc('Model to use for image generation')
      .addText((text: any) =>
        text
          .setPlaceholder('stable-diffusion')
          .setValue(this.plugin.settings.model)
          .onChange(async (value: string) => {
            this.plugin.settings.model = value;
            await this.plugin.saveSettings();
          }));

    new Setting(containerEl)
      .setName('Output folder')
      .setDesc('Folder to store generated images')
      .addText((text: any) =>
        text
          .setPlaceholder('OllamaImages')
          .setValue(this.plugin.settings.outputDir)
          .onChange(async (value: string) => {
            this.plugin.settings.outputDir = value;
            await this.plugin.saveSettings();
          }));
  }
}
