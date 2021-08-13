import express from 'express';
import config from '../global/config';
import http from 'http';

export default class Server {

    private static _intance: Server; 
    private httpServer: http.Server;
    public app: express.Application;
    public port: number;

    private constructor() {

        this.app = express();
        this.port = Number(config.api.port);
        this.httpServer = new http.Server( this.app )
    }

    public static get instance() {
        return this._intance || (this._intance = new this());
    }

    start( callback: Function ) {
        this.httpServer.listen(this.port, callback());
    }
}