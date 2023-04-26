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
    try {
        const furniture = new FurnitureModel(request.body)
        const addedFurniture = await furnitureLogic.addFurniture(furniture)
        response.status(201).json(addedFurniture)        
    }
    catch (err: any) {
        next(err)        
    }
})

//Get all furniture-type
router.get("/furniture-type", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const furnitureType = await furnitureLogic.getAllFurnitureType()
        response.json(furnitureType)        
    }
    catch (err: any) {
        next(err)        
    }
})

export default router