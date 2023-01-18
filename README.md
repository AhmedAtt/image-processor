
# Image Processor API

A simple Image scaling API built with Node, Express and Typescript.


## Scripts

To run project

```bash
  yarn start
```

To build and run tests, run the following command

```bash
  yarn test
```

To Lint the code, run the following command

```bash
  yarn lint
```

To format the code with prettier code, run the following command

```bash
  yarn prettier
```

## API Reference

#### Get all items

```http
  GET /api/images?filename={FILE_NAME}&width={WIDTH}&height={HEIGHT}
```

| Parameter  | Type     | Description                                                                     |
|:-----------|:---------|:--------------------------------------------------------------------------------|
| `filename` | `string` | **Required**. filename of the input image file(will be used for output as well) |
| `Length`   | `number` | **Required**. Length of the result image                                        |
| `Width`    | `number` | **Required**. Width of the result image                                         |



