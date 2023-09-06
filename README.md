### Start with Docker

## Running the app

```bash
$ docker compose build up
```

### Start without Docker

## Gateway Installation

```bash
$ cd ./gateway
$ npm install
```

## GRPC Installation

```bash
$ cd ./grpc-microservice
$ npm install
```

## Primary Installation

```bash
$ cd ./primary-microservice
$ npm install
```

## Secondary Installation

```bash
$ cd ./secondary-microservice
$ npm install
```

## Running the app

```bash
# development
$ cd ./gateway
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
