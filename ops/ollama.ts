// === ops/ollama.ts ===
// Purpose: Execute the `ollama` CLI to create an image from a text prompt.
// Dependencies: child_process execFile and util.promisify.
// Output: Resolves once the image file specified by the caller has been written.
// Example: await runOllama("stable-diffusion", "A fox in the woods", "./fox.png");
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

export async function runOllama(model: string, prompt: string, output: string): Promise<void> {
  try {
    await execFileAsync('ollama', ['run', model, prompt, '--image', output]);
  } catch (err) {
    throw new Error('❌ Could not run Ollama. Check that it\u2019s installed.');
  }
}
