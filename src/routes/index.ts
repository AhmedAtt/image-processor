import express from 'express';
import { resizeImage } from '../ImageProcessor';

const routes = express.Router();

// request url: /images?filename="argentina"&width="200"&height="200"

interface ImagesRequestQuery {
  filename?: string;
  width?: string;
  height?: string;
}
routes.get('/images', async (req, res) => {
  const { filename, width, height } = req.query;
  const validationMessage = validateImagesQuery(req.query);
  if (validationMessage) {
    res.send(validationMessage);
  } else {
    try {
      const path = await resizeImage(
        filename as string,
        parseInt(width as string),
        parseInt(height as string)
      );
      res.sendFile(path);
      // res.send('Image loaded successfully');
    } catch (e) {
      res.send("Image doesn't exist or failed to process image");
    }
  }
});

const validateImagesQuery = (query: ImagesRequestQuery): null | string => {
  if (!query.filename || !query.width || !query.height) {
    return 'Missing one of the query params[filename, width, height]';
  } else return null;
};

export default routes;
