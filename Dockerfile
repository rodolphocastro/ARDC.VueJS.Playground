# Made by following the instructions available @ https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
FROM node:lts-alpine AS build
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

# Creating the production/publish image
FROM nginx:stable-alpine AS production
# Copying the distro from the build container
COPY --from=build /app/dist /usr/share/nginx/html
# Copying default nginx config to our nginx
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
# Exposing port 80
EXPOSE 80
# Setting the entrypoint for nginx
CMD [ "nginx", "-g", "daemon off;" ]