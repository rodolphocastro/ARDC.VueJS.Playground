# ARDC VueJS Playground

## Buy me a coffee

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/V7V811AWL)

## Status

### Master

[![Build Status](https://travis-ci.com/rodolphocastro/ARDC.VueJS.Playground.svg?branch=master)](https://travis-ci.com/rodolphocastro/ARDC.VueJS.Playground)

### Develop

[![Build Status](https://travis-ci.com/rodolphocastro/ARDC.VueJS.Playground.svg?branch=develop)](https://travis-ci.com/rodolphocastro/ARDC.VueJS.Playground)

### Changelogs

The changelogs for this Client can be found in the `CHANGELOG.md` file.

## About this Repository

This repository aims to provide examples on how to consume a RESTFul API using VueJS.

## Technologies

The following technologies and packages are used in this project:

+ Node
+ Axios
+ Vue
  + Vuex
  + Vue-Router
  + bootstrap-vue
+ Docker
  + Docker-compose
+ Travis-CI

## Running, Building and Testing

In order to build this project you'll need the latest version of `npm`, which comes with `Node`.

After installing `npm` you can use the command `npm install -g @vue/cli` to install the Vue CLI.

For production and staging environments check out the `docker-compose.yml` files.

### NPM

#### Install Dependencies

Use the command `npm install` to install all the dependencies.

#### Linting

Use the command `npm run lint` to lint all the files in the project.

#### Running - Developer Mode

Use the command `npm run serve` to build and run a developement server with Hot Reload.

#### Building for Production

Use the command `npm run build` to build and create a distributable for production environments.

#### Running - Tests

Use the command `npm run test` to run the unit tests.

#### Vue GUI

Use the command `vue ui` to open up a Gui for managing the project.

### Docker

#### Development Environment

Run the `docker-compose -f docker-compose.yml` to run a local API [Playground API](https://github.com/rodolphocastro/ARDC.NetCore.Playground) for development.

#### Staging Environment

Run the `docker-compose -f docker-compose.stage.yml` to run a local API and a local Client.

## Contributing

If you find a bug or wish to make a suggestion feel free to open a new Issue.
