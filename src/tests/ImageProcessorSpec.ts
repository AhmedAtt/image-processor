import { createImagePath } from '../File';
import path from 'node:path';
import { resizeImage } from '../ImageProcessor';
import * as fs from 'fs';

const THUMB_DIR = path.resolve('assets/thumb');
describe('Test Image Processor', () => {
  it('should successfully resize an image', async () => {
    const thumbImagePath = await resizeImage('santamonica-test', 200, 200);
    expect(thumbImagePath).toEqual(
      createImagePath('santamonica-test', true, THUMB_DIR, 200, 200)
    );
  });
});

// remove test file if created
afterAll(async (): Promise<void> => {
  const path = createImagePath('santamonica-test', true, THUMB_DIR, 200, 200);

  try {
    fs.unlinkSync(path);
  } catch (e) {
    console.log('Error deleting test file');
  }
});
