FROM node:10
WORKDIR /usr/src/app

COPY . .
RUN npm install express --save
RUN npm install bcrypt --save
RUN npm install validator --save

EXPOSE 5000
CMD { "node", "server.js"]
