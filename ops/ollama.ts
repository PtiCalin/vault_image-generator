import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

export async function runOllama(model: string, prompt: string, output: string): Promise<void> {
  await execFileAsync('ollama', ['run', model, prompt, '--image', output]);
}
