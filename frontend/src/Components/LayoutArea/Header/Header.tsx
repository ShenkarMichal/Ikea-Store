import { NavLink } from "react-router-dom"
import "./Header.css"

function Header(): JSX.Element{
    return(
        <div className="Header">
            <h1>IKEA</h1>
            <NavLink to={"/furniture-add"}>ADD</NavLink>
        </div>
    )
}

export default Header