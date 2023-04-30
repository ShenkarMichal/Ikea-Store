import express, { NextFunction, Request, Response } from 'express'
import UserModel from '../4-models/user-model'
import authLogic from '../5-logics/auth-logic'

const router = express.Router()

//Register
router.post("/register", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const user = new UserModel(request.body)
        const token = await authLogic.register(user)
        response.status(201).json(token)        
    } 
    catch (err: any) {
        next(err)        
    }
})

export default router