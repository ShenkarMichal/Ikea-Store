import { useEffect, useState } from "react"
import "./GetFurniture.css"
import FurnitureModel from "../../../4-Models/FurnitureModel"
import furnitureService from "../../../3-Services/FurnitureService"
import FurnitureCard from "../FurnitureCard/FurnitureCard"
import GetFurnitureType from "../GetFurnitureType/GetFurnitureType"
import { furnitureTypeStore } from "../../../Redux/FurnitureTypeState"

function GetFurniture(): JSX.Element{
    const [furniture, setFurniture] = useState<FurnitureModel[]>([])
    useEffect(()=>{
        furnitureService.getAllFurniture()
            .then(furniture => setFurniture(furniture))
            .catch(err => console.log(err))
    },[])
    
    function search(){
        const typeID = furnitureTypeStore.getState().furnitureType.furnitureTypeID
            furnitureService.getFurnitureByType(typeID)
                .then(f => setFurniture(f))
                .catch(err => console.log(err))
    }

    function clear(){
        furnitureService.getAllFurniture()
            .then(furniture => setFurniture(furniture))
            .catch(err => console.log(err))        
    }

    return(
        <div className="GetFurniture">
            <div className="Search">
                <GetFurnitureType />
                <button onClick={search}>Search</button>
                <button onClick={clear}>Clear</button>
            </div>
            {furniture.map(f => <FurnitureCard key={f.furnitureID} furniture = {f} />)}
        </div>
    )
}

export default GetFurniture