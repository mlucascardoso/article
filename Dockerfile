FROM node:12.14.0-alpine3.11

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm i --silent

COPY . /usr/src/app

# RUN npm run migrate

# RUN npm run seed

EXPOSE 8080

CMD ["npm", "run", "dev"]