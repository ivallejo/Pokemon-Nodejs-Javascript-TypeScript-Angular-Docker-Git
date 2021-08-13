import { Router, Request, Response } from 'express'
import { success, error } from '../../network/response';
import Server from '../../class/server'
import controller from './index'

const server = Server.instance;
export const router = Router()

const get = async( req: Request, res: Response ) => {
    const type = req.params.type || '';
    await controller.get( type )
        .then( (data) => {
            success(req, res, data, 200)
        })
        .catch( (err) => {
            error(req, res, 'Error interno', 500, err)
        });
}

router.get('/:type', get)
router.get('/', get)

export default router;