FROM node:12.13.0

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["node", "app.js"]
