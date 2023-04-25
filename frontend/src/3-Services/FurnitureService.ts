import axios from "axios";
import FurnitureModel from "../4-Models/FurnitureModel";
import appConfig from "../2-Utils/Config";

class FurnitureService {
    public async getAllFurniture(): Promise<FurnitureModel[]>{
        const response = await axios.get<FurnitureModel[]>(appConfig.furnitureURL)
        const furniture = response.data
        return furniture
    }

    public async addFurniture(furniture: FurnitureModel): Promise<void> {
        await axios.post<void>(appConfig.furnitureURL, furniture)
    }
}

export default FurnitureService