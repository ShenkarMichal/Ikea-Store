import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import FurnitureModel from "../4-models/furniture-model";
import FurnitureTypeModel from "../4-models/furniture-type-model";

async function getAllFurniture(): Promise<FurnitureModel[]> {

    const sql = `SELECT F.*, T.furnitureTypeName 
                FROM furniture AS F JOIN furnitureType AS T
                ON F.furnitureTypeID = T.furnitureTypeID`
    const furniture = await dal.execute(sql)
    return furniture    
}

async function addFurniture(furniture:FurnitureModel): Promise<FurnitureModel> {
    const sql = `INSERT INTO furniture
                VALUES(
                    DEFAULT,
                    ${furniture.furnitureTypeID},
                    '${furniture.name}',
                    '${furniture.description}',
                    '${furniture.size}',
                    '${furniture.color}',
                    ${furniture.price},
                    ${furniture.discount}
                )`
    const info: OkPacket = await dal.execute(sql)
    furniture.furnitureID = info.insertId
    return furniture    
}

async function getAllFurnitureType(): Promise<FurnitureTypeModel[]> {
    const sql = "SELECT * FROM furnitureType"
    const furnitureType = await dal.execute(sql)
    return furnitureType
}

async function getFurnitureByType(furnitureTypeID:number): Promise<FurnitureModel[]> {
    const sql = `SELECT * FROM furniture
                WHERE furnitureTypeID = ${furnitureTypeID}`
    const furnitureByType = await dal.execute(sql)
    return furnitureByType                
}

export default {
    getAllFurniture,
    addFurniture,
    getAllFurnitureType,
    getFurnitureByType
}