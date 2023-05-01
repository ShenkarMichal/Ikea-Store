import { useForm } from "react-hook-form"
import FurnitureModel from "../../../4-Models/FurnitureModel"
import "./AddFurniture.css"
import furnitureService from "../../../3-Services/FurnitureService"
import { useNavigate } from "react-router-dom"
import GetFurnitureType from "../GetFurnitureType/GetFurnitureType"
import { furnitureTypeStore } from "../../../Redux/FurnitureTypeState"
import useVerifyLoggedIn from "../../../2-Utils/UseVerifyLoggedIn"

function AddFurniture(): JSX.Element{


    useVerifyLoggedIn()
    
    const {register, handleSubmit} = useForm<FurnitureModel>()
    const navigate = useNavigate()

    async function send(furniture: FurnitureModel){
        try {
            const furnitureType = furnitureTypeStore.getState().furnitureType
            furniture.furnitureTypeID = furnitureType.furnitureTypeID
            await furnitureService.addFurniture(furniture)            
            alert("The furniture has been successfully added")
            navigate("/furniture")            
        } 
        catch (err:any) {
            alert(err)
        }

    }
    return(
        <div className="AddFurniture">
            <form onSubmit={handleSubmit(send)}>
                <label>Furniture Type:</label>
                <GetFurnitureType /> <br />
                <label>Name:</label>
                <input type="text" {...register("name")} /> <br />
                <label>Description:</label>
                <textarea {...register("description")}></textarea> <br />
                <label>Size:</label>
                <input type="text" {...register("size")}/> <br />
                <label>Color:</label>
                <input type="text" {...register("color")}/> <br />
                <label>Price:</label>
                <input type="text" {...register("price")}/> <br />
                <label>Discount:</label>
                <input type="text" {...register("discount")}/> <br />

                <button>ADD</button>
            </form>
        </div>
    )
}

export default AddFurniture