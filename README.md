# Angular, NodeJS | Pokedex
The code is for the Integrating Angular with Node.js

## Software Requirements To Run Locally (there's a Docker option below as well)

* Node.js 12 or higher

## Running the Application Locally

1. Install Node.js (12 or higher)

    * Node.js: https://nodejs.org

### Client
```
cd client
npm run start
```

### Server
```
cd server
npm run start
```

## Running the Application with Docker

1. Install Node.js (12 or higher) and Docker

    * Node.js: https://nodejs.org
    * Docker for Mac/Windows or Docker Toolbox - https://www.docker.com/products/overview

### Client
```
cd client
docker build -t pokemon .
docket run -d -it -p 80:80 pokemon
```

### Server
```
cd server
docker build -t node-restapi .
docker run -it -p 5000:5000 node-restapi
```

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://raw.githubusercontent.com/ivallejo/Pokemon-Nodejs-Javascript-TypeScript-Angular-Docker-Git/main/LICENSE) file for details.

## Where to get Help
If you have any questions about the projec, contact me at email vallejoaguilar@gmail.com


I'll be glad you give this project a good use! 💙