import axios from "axios";
import FurnitureModel from "../4-Models/FurnitureModel";
import appConfig from "../2-Utils/Config";
import FurnitureTypeModel from "../4-Models/FurnitureTypeModel";

class FurnitureService {
    public async getAllFurniture(): Promise<FurnitureModel[]>{
        const response = await axios.get<FurnitureModel[]>(appConfig.furnitureURL)
        const furniture = response.data
        return furniture
    }

    public async addFurniture(furniture: FurnitureModel): Promise<FurnitureModel> {
        const response = await axios.post<FurnitureModel>(appConfig.furnitureURL, furniture)
        const addedFurniture = response.data
        return addedFurniture
    }

    public async getAllFurnitureType(): Promise<FurnitureTypeModel[]> {
        const response = await axios.get<FurnitureTypeModel[]>(appConfig.furnitureTypeURL)
        const furnitureType = response.data
        return furnitureType
    }
}

const furnitureService = new FurnitureService()
export default furnitureService