FROM node:20

WORKDIR /src/app

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]