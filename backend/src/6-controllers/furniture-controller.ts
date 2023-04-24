import express, { NextFunction, Request, Response } from 'express'
import furnitureLogic from '../5-logics/furniture-logic'

const router = express.Router()

//Get all furniture
router.get("/furniture", async (request: Request, response: Response, next: NextFunction)=>{
    try{
        const furniture = await furnitureLogic.getAllFurniture()
        response.json(furniture)
    }
    catch (err:any){
        next(err)
    }    
})

export default router