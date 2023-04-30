import axios from "axios";
import FurnitureModel from "../4-Models/FurnitureModel";
import appConfig from "../2-Utils/Config";
import FurnitureTypeModel from "../4-Models/FurnitureTypeModel";
import { FurnitureActionType, furnitureStore } from "../Redux/FurnitureState";

class FurnitureService {
    public async getAllFurniture(): Promise<FurnitureModel[]>{
        let furniture = furnitureStore.getState().furniture
        if(furniture.length === 0){
            const response = await axios.get<FurnitureModel[]>(appConfig.furnitureURL)
            furniture = response.data
        }
        return furniture
    }

    public async addFurniture(furniture: FurnitureModel): Promise<FurnitureModel> {
        const response = await axios.post<FurnitureModel>(appConfig.furnitureURL, furniture)
        const addedFurniture = response.data
        furnitureStore.dispatch({type:FurnitureActionType.AddFurniture, payload:addedFurniture})
        return addedFurniture
    }

    public async getAllFurnitureType(): Promise<FurnitureTypeModel[]> {
        const response = await axios.get<FurnitureTypeModel[]>(appConfig.furnitureTypeURL)
        const furnitureType = response.data
        return furnitureType
    }

    public async getFurnitureByType(furnitureTypeID: number): Promise<FurnitureModel[]> {
        const response = await axios.get<FurnitureModel[]>(appConfig.furnitureByTypeURL+furnitureTypeID)
        const furniture = response.data
        return furniture
    }
}

const furnitureService = new FurnitureService()
export default furnitureService