export class FileSystem {
  ls(path: string): string[] { throw new Error('Not implemented'); }
  mkdir(path: string): void { throw new Error('Not implemented'); }
  addContentToFile(filePath: string, content: string): void { throw new Error('Not implemented'); }
  readContentFromFile(filePath: string): string { throw new Error('Not implemented'); }
}
