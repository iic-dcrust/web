FROM node:14.2.0-alpine3.11

WORKDIR /web

COPY ./package.json ./

RUN npm i

COPY ./ ./

CMD 'npm' 'start'
