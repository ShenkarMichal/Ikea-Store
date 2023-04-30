import { NavLink } from "react-router-dom"
import "./Header.css"
import { authStore } from "../../../Redux/AuthState"

function Header(): JSX.Element{

    const login = authStore.getState().user
    
    return(
        <div className="Header">
            <h1>IKEA</h1>
            <div className="nav">
                {login ? <span>Hello {login.username}</span> : 
                <div>
                    <NavLink to={"/auth/register"}>Register</NavLink>
                    <span> | </span>
                    <NavLink to={"/auth/login"}>Login</NavLink>
                </div>}
                <br /><br />
                <NavLink to={"/furniture-add"}>Add</NavLink>
                <span> | </span>
                <NavLink to={"/furniture"}>Back</NavLink>
            </div>
        </div>
    )
}

export default Header