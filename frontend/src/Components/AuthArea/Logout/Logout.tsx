import { NavLink, useNavigate } from "react-router-dom"
import "./Logout.css"
import authService from "../../../3-Services/AuthService"
import { useEffect } from "react"

function Logout(): JSX.Element {

    const navigate = useNavigate()

    useEffect(()=>{
        authService.logout()                    
        navigate("/auth/login")

    },[])


    return null
}

export default Logout