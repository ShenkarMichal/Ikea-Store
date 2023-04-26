import { SyntheticEvent, useEffect, useState } from "react"
import FurnitureTypeModel from "../../../4-Models/FurnitureTypeModel"
import "./GetFurnitureType.css"
import furnitureService from "../../../3-Services/FurnitureService"
import { useForm } from "react-hook-form"
import { FurnitureTypeActionType, furnitureTypeStore } from "../../../Redux/FurnitureTypeState"

function GetFurnitureType(): JSX.Element {

    const [furnitureType, setFurnitureType] = useState<FurnitureTypeModel[]>([])

    useEffect(()=>{
        furnitureService.getAllFurnitureType()
            .then(t => setFurnitureType(t))
            .catch(err => console.log(err.msg))
    },[])

    const [furnitureTypeID, setFurnitureTypeID] = useState<FurnitureTypeModel>()

    function handleSelectChange(event: any) {
        const type = new FurnitureTypeModel()
        type.furnitureTypeID = +event.target.value
        type.furnitureTypeName = event.target.innerText
        setFurnitureTypeID(type);
        furnitureTypeStore.dispatch({type: FurnitureTypeActionType.GetFurnitureTypeID, payload: type})
    }

    return(
        <div className="GetFurnitureType">
            <select onChange={handleSelectChange}>
                <option defaultChecked>Select Furniture-Type</option>
                {furnitureType.map(t => 
                    <option key={t.furnitureTypeID} value={t.furnitureTypeID}>
                        {t.furnitureTypeName}
                    </option>)}
            </select>

        </div>
    )
}

export default GetFurnitureType