FROM node:8

WORKDIR /usr/app
COPY package*.json ./
ENV PATH /usr/app/node_modules/.bin:$PATH
RUN npm install -g @angular/cli@1.7.1
RUN npm install -qy
COPY . .

EXPOSE 4200 49153

CMD ["npm", "start"]

