import FurnitureModel from "../../../4-Models/FurnitureModel"
import "./FurnitureCard.css"

interface FurnitureCardProps{
    furniture: FurnitureModel
}

function FurnitureCard(props: FurnitureCardProps): JSX.Element{
    return(
        <div className="FurnitureCard">
            <h3>{props.furniture.furnitureTypeName} | {props.furniture.name}</h3>
            <span>{props.furniture.description}</span> <br />
            <span>{props.furniture.size} , {props.furniture.color}</span> <br />
            <span> {props.furniture.price}$, {props.furniture.discount}% </span>
        </div>
    )
}

export default FurnitureCard