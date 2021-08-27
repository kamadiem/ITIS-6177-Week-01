FROM node:12

WORKDIR /appkema

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

CMD ["npm", "start"]