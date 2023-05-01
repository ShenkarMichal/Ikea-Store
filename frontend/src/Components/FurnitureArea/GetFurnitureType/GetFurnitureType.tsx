import { SyntheticEvent, useEffect, useState } from "react"
import FurnitureTypeModel from "../../../4-Models/FurnitureTypeModel"
import "./GetFurnitureType.css"
import furnitureService from "../../../3-Services/FurnitureService"
import { useForm } from "react-hook-form"
import { FurnitureTypeActionType, furnitureTypeStore } from "../../../Redux/FurnitureTypeState"
import { InputLabel, Select, MenuItem, FormControl  } from "@mui/material"

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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Furnitur Type</InputLabel>

                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="FurnitureType"
                value={"Select Furniture Type"}
                onChange={handleSelectChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                    {furnitureType.map(t => 
                        <MenuItem  key={t.furnitureTypeID} value={t.furnitureTypeID}>
                            {t.furnitureTypeName}
                        </MenuItem >)}
                </Select>
            </FormControl>

        </div>
    )
}

export default GetFurnitureType