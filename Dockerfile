FROM node:20-slim

WORKDIR /src

COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json

RUN npm ci

CMD npm run start
