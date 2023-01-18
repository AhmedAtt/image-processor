import path from 'node:path';
import * as fs from 'fs';

const createImagePath = (
  filename: string,
  isThumb: boolean,
  dir: string,
  width?: number,
  height?: number
) => {
  if (!isThumb) {
    return path.resolve(dir, `${filename}.jpg`);
  }

  return path.resolve(dir, `${filename}-W${width}-L${height}.jpg`);
};

const isThumbAvailable = (path: string): boolean => {
  return fs.existsSync(path);
};

const createThumbnailsDirectory = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

export { createThumbnailsDirectory, isThumbAvailable, createImagePath };
