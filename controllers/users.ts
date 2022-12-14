import { Request, Response } from "express"
import User from "../models/user";

export const getUsers = async(req: Request, res: Response) => {
    const users = await User.findAll();
    
    res.json({
        users
    });
}

export const getUser = async(req: Request, res: Response) => {
    const {id} = req.params

    const user = await User.findByPk(id);
    
    if (!user) {
        return res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }

    res.json({
        user
    });
}

export const postUser = async(req: Request, res: Response) => {
    const {body} = req;

    try {
        const emailExist = await User.findOne({
            where: {
                email: body.email
            }
        });

        if (emailExist) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el email ${body.email}`
            })
        }
        
        const user = await User.create(body);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Se ha detectado un problema interno con el servidor'
        });
    }
}


export const putUser = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }

        await user.update(body);
        
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Se ha detectado un problema interno con el servidor'
        });
    }
}


export const deletetUser = async(req: Request, res: Response) => {
    const {id} =  req.params;
    
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }

    await user.update({status: false});

    // await user.destroy(); Eliminaci??n F??sica;
    
    res.json(user);
}