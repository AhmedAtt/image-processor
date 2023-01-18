import path from 'node:path';
import {
  createImagePath,
  createThumbnailsDirectory,
  isThumbAvailable,
} from './File';

import sharp from 'sharp';

const IMAGES_DIR = path.resolve('assets/full');

const THUMB_DIR = path.resolve('assets/thumb');

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
) => {
  const fullImagePath = createImagePath(filename, false, IMAGES_DIR);
  const thumbImagePath = createImagePath(
    filename,
    true,
    THUMB_DIR,
    width,
    height
  );

  console.log('Full Image Path: ', fullImagePath);
  console.log('Thumb Image Path: ', thumbImagePath);

  createThumbnailsDirectory(THUMB_DIR);

  if (!isThumbAvailable(thumbImagePath)) {
    await sharp(fullImagePath).resize(width, height).toFile(thumbImagePath);
  }
  return thumbImagePath;
};
