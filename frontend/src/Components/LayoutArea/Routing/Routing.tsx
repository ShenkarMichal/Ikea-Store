import { Navigate, Route, Routes } from "react-router-dom"
import "./Routing.css"
import GetFurniture from "../../FurnitureArea/GetFurniture/GetFurniture"
import AddFurniture from "../../FurnitureArea/AddFurniture/AddFurniture"
import PageNotFound from "../PageNotFound/PageNotFound"
import Register from "../../AuthArea/Register/Register"
import Login from "../../AuthArea/Login/Login"
import Logout from "../../AuthArea/Logout/Logout"

function Routing(): JSX.Element{
    return(
        <div className="Routing">
            <Routes>
                <Route path="/furniture" element={<GetFurniture />} />
                <Route path="/furniture-add" element={<AddFurniture />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/logout" element={<Logout />} />
                <Route path="/" element={<Navigate to="/auth/logout" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default Routing