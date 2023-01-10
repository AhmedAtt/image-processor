
# Image Processor API

A simple Image scaling API built with Node, Express and Typescript.


## Running Tests

To run tests, run the following command

```bash
  yarn test
```


## API Reference

#### Get all items

```http
  GET /api/images
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Length` | `number` | **Required**. Length of the result image |
| `Width` | `number` | **Required**. Width of the result image |



