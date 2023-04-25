import { Navigate, Route, Routes } from "react-router-dom"
import "./Routing.css"
import GetFurniture from "../../FurnitureArea/GetFurniture/GetFurniture"
import AddFurniture from "../../FurnitureArea/AddFurniture/AddFurniture"
import PageNotFound from "../PageNotFound/PageNotFound"

function Routing(): JSX.Element{
    return(
        <div className="Routing">
            <Routes>
                <Route path="/furniture" element={<GetFurniture />} />
                <Route path="/furniture-add" element={<AddFurniture />} />
                <Route path="/" element={<Navigate to="/furniture" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default Routing