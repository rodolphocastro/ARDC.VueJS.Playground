# Made by following the instructions available @ https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
FROM node:lts-alpine

# Installing a Http-Server to serve our application
RUN npm install -g http-server

# Creating the /app directory
WORKDIR /app

# Copying to /app our package.json and packge-lock.json.
# We copy those files first because we're optimizing for Docker Layering
COPY package*.json ./

# Installing dependencies with NPM
RUN npm install

# Copying the remaining files over
COPY . .

# Building our Application
RUN npm run build

# Exposing port 8080
# Telling docker our 'executable' is 'http-server' with args 'dist'
EXPOSE 8080
CMD [ "http-server", "dist" ]
