export interface PluginSettings {
  model: string;
  outputDir: string;
}

export const DEFAULT_SETTINGS: PluginSettings = {
  model: 'stable-diffusion',
  outputDir: 'OllamaImages'
};
