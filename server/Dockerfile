FROM node:8

WORKDIR /usr/app
COPY package*.json ./
RUN npm install -qy
COPY . .

ENV PORT 8080

EXPOSE 8080

CMD ["npm", "start"]
