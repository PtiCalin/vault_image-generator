// === config/default.ts ===
// Purpose: Define default configuration values and the PluginSettings interface.
// Dependencies: none.
// Output: Exports PluginSettings and DEFAULT_SETTINGS constants.
// Example: DEFAULT_SETTINGS.model is "stable-diffusion".
export interface PluginSettings {
  model: string;
  outputDir: string;
}

export const DEFAULT_SETTINGS: PluginSettings = {
  model: 'stable-diffusion',
  outputDir: 'OllamaImages'
};
