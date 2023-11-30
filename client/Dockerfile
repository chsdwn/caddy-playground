FROM node:20.10.0-alpine3.17

WORKDIR /client

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn", "dev"]