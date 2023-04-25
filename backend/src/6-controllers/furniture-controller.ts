import express, { NextFunction, Request, Response } from 'express'
import furnitureLogic from '../5-logics/furniture-logic'
import FurnitureModel from '../4-models/furniture-model'

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

//Add furniture
router.post("/furniture", async (request: Request, response: Response, next: NextFunction)=>{
    const furniture = new FurnitureModel(request.body)
    const addedFurniture = await furnitureLogic.addFurniture(furniture)
    response.status(201).json(addedFurniture)
})

export default router