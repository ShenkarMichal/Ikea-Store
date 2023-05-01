import { NavLink } from "react-router-dom"
import "./Header.css"
import { authStore } from "../../../Redux/AuthState"
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu"

function Header(): JSX.Element{


    
    return(
        <div className="Header">
            <h1>IKEA</h1>
            <div className="nav">
                <AuthMenu />
                <br /><br />
                <NavLink to={"/furniture-add"}>Add</NavLink>
                <span> | </span>
                <NavLink to={"/furniture"}>Back</NavLink>
            </div>
        </div>
    )
}

export default Header