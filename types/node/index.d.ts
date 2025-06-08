declare module 'child_process' {
  export function execFile(...args: any[]): any;
}
declare module 'util' {
  export function promisify(fn: any): any;
}
declare module 'fs/promises' {
  export * from 'fs';
}
declare module 'fs' {
  export function mkdir(path: any, options?: any): Promise<void>;
  export function readFile(path: any, options?: any): Promise<Buffer>;
}
declare module 'fs/promises' {
  export function mkdir(path: any, options?: any): Promise<void>;
  export function readFile(path: any, options?: any): Promise<Buffer>;
}
