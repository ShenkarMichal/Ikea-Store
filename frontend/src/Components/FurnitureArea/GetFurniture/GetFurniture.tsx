import { useEffect, useState } from "react"
import "./GetFurniture.css"
import FurnitureModel from "../../../4-Models/FurnitureModel"
import furnitureService from "../../../3-Services/FurnitureService"
import FurnitureCard from "../FurnitureCard/FurnitureCard"

function GetFurniture(): JSX.Element{
    const [furniture, setFurniture] = useState<FurnitureModel[]>([])
    useEffect(()=>{
        furnitureService.getAllFurniture()
            .then(furniture => setFurniture(furniture))
            .catch(err => console.log(err))
    },[])

    return(
        <div className="GetFurniture">
            {furniture.map(f => <FurnitureCard key={f.furnitureID} furniture = {f} />)}
        </div>
    )
}

export default GetFurniture