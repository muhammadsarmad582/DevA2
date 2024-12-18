FROM node:18-alpine

WORKDIR /client

COPY package*.json ./

ENV NODE_OPTIONS="--max-old-space-size=2048"

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
