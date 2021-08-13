import Server from './class/server';
import router from './network/routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from "morgan";

const server = Server.instance;

server.app.use( bodyParser.urlencoded({ extended :true }) )
server.app.use( bodyParser.json() )
// server.app.use( bodyParser.json({limit: '1024mb'}));
server.app.use( '/web', express.static(__dirname + '/public'));
server.app.use( cors({ origin: true, credentials: true }) )
server.app.use(morgan('dev'));

router(server.app)

server.start( () => {
    console.log(`Server listen port ${ server.port }`)
})