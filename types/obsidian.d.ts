declare module 'obsidian' {
  export class App {
    workspace: any;
    vault: any;
  }
  export class Notice {
    constructor(message: string);
  }
  export class MarkdownView {
    editor: any;
  }
  export function normalizePath(path: string): string;
  export class Setting {
    constructor(el: HTMLElement);
    setName(name: string): this;
    setDesc(desc: string): this;
    addText(cb: (el: any) => void): this;
  }
  export class PluginSettingTab {
    containerEl: HTMLElement;
    constructor(app: App, plugin: any);
    display(): void;
  }
  export class Plugin {
    app: App;
    addCommand(command: any): void;
    addSettingTab(tab: PluginSettingTab): void;
    loadData(): Promise<any>;
    saveData(data: any): Promise<void>;
  }
}
