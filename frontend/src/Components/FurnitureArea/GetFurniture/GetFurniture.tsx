import { useEffect, useState } from "react"
import "./GetFurniture.css"
import FurnitureModel from "../../../4-Models/FurnitureModel"
import furnitureService from "../../../3-Services/FurnitureService"
import FurnitureCard from "../FurnitureCard/FurnitureCard"
import GetFurnitureType from "../GetFurnitureType/GetFurnitureType"
import { FurnitureTypeActionType, furnitureTypeStore } from "../../../Redux/FurnitureTypeState"
import { furnitureStore } from "../../../Redux/FurnitureState"
import { Button  } from "@mui/material"
import notify from "../../../3-Services/NotifyService"

function GetFurniture(): JSX.Element{
    const [furniture, setFurniture] = useState<FurnitureModel[]>([])
    useEffect(()=>{
        furnitureService.getAllFurniture()
            .then(furniture => setFurniture(furniture))
            .catch(err => console.log(err))
        const unsubscribe = furnitureStore.subscribe(()=>{
            setFurniture(furnitureStore.getState().furniture)
        })
        return ()=>unsubscribe()
    },[])
    
    function search(){
        const typeID = furnitureTypeStore.getState().furnitureType?.furnitureTypeID
        if(!typeID){
            notify.error("Select a furniture type")
            return
        }
            furnitureService.getFurnitureByType(typeID)
                .then(f => setFurniture(f))
                .catch(err => console.log(err))
    }

    function clear(){
        furnitureService.getAllFurniture()
            .then(furniture => setFurniture(furniture))
            .catch(err => console.log(err))   
        furnitureTypeStore.dispatch({type:FurnitureTypeActionType.GetFurnitureTypeID, payload:null})     
    }

    return(
        <div className="GetFurniture">
            <div className="Search">
                <GetFurnitureType />
                <Button  variant="outlined" onClick={search}>Search</Button >
                <Button  variant="outlined" onClick={clear}>Clear</Button >
            </div>
            {furniture.map(f => <FurnitureCard key={f.furnitureID} furniture = {f} />)}
        </div>
    )
}

export default GetFurniture