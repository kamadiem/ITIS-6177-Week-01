FROM node:12

WORKDIR /appkema

COPY package.json /appkema

RUN npm install

COPY . /appkema

CMD node index.json

EXPOSE 8080
