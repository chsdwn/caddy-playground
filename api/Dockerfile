FROM node:20.10.0-alpine3.17

WORKDIR /api

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]