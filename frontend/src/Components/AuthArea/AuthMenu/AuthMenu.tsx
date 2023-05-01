import { useEffect, useState } from "react"
import UserModel from "../../../4-Models/UserModel"
import "./AuthMenu.css"
import { authStore } from "../../../Redux/AuthState"
import { NavLink } from "react-router-dom"

function AuthMenu(): JSX.Element{

    const [user, setUser] = useState<UserModel>()

    useEffect(() => {
        setUser(authStore.getState().user);
        console.log(user)
        const unsubscribe = authStore.subscribe(() => {
            setUser(authStore.getState().user);
        });
        return unsubscribe;
    }, []);

    return(
        <div className="AuthMenu">
            {!user && <>
                <span>Hello Guest | </span>
                <NavLink to="/auth/login">Login</NavLink>
                <span> | </span>
                <NavLink to="/auth/register">Register</NavLink>
            </>}
            {user && <>
                <span>Hello {user.username} </span>
                <NavLink to="auth/logout">Logout</NavLink>
            </>}
        </div>
    )
}

export default AuthMenu