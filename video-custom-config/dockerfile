FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --dev

EXPOSE 3002

CMD [ "npm", "run", "seed"]