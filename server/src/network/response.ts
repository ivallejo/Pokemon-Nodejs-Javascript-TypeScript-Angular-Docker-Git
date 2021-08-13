import { Request, Response } from 'express'

const statuMessages: any = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal Error'
}

export const success = function (req: Request, res: Response, message: any, status: number) {
    let statusCode = status;
    let statusMessage = message;
    if (!status)
        status = 200;
    if (!message)
        statusMessage = statuMessages[status];

    res.status(statusCode).send({
        error:'',
        body: statusMessage
    })
}

export const error = function (req: Request, res: Response, message: any, status: number, details: any) {
    let statusCode = status;
    let statusMessage = message;
    if (!status)
        status = 500;
    if (!message) 
        statusMessage = statuMessages[status];

    res.status(statusCode).send({
        error : statusMessage,
        body: ''
    })
}