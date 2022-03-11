# NodeJs Starter Project
Starter project for nodejs applications with typescript.

# Docker
This starter project also includes a basic docker image for shipping your application via docker.

## Build Image
```bash
docker build -t <your-name>/node-app<:tag> -f ./docker/Dockerfile .
```

## Run Container
```bash
docker run --name node-app --rm <your-name>/node-app<:tag>
```



