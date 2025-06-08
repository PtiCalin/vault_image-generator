// === ops/ollama.ts ===
// Purpose: Execute the `ollama` CLI to create an image from a text prompt.
// Dependencies: child_process execFile and util.promisify.
// Output: Resolves once the image file specified by the caller has been written.
// Example: await runOllama("stable-diffusion", "A fox in the woods", "./fox.png");
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

export async function runOllama(model: string, prompt: string, output: string): Promise<void> {
  await execFileAsync('ollama', ['run', model, prompt, '--image', output]);
}
