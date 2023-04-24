import dal from "../2-utils/dal";
import FurnitureModel from "../4-models/furniture-model";

async function getAllFurniture(): Promise<FurnitureModel[]> {

    const sql = "SELECT * FROM furniture"
    const furniture = await dal.execute(sql)
    return furniture    
}

export default {
    getAllFurniture
}