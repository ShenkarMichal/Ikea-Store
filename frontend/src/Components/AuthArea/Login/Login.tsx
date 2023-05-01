import { useForm } from "react-hook-form"
import "./Login.css"
import CredentialsModel from "../../../4-Models/CredentialsModel"
import authService from "../../../3-Services/AuthService"
import { useNavigate } from "react-router-dom"
import { authStore } from "../../../Redux/AuthState"
import notify from "../../../3-Services/NotifyService"

function Login(): JSX.Element{

    const {register, handleSubmit} = useForm<CredentialsModel>()
    const navigate = useNavigate()

    async function send(credential:CredentialsModel) {
        try {
            await authService.login(credential)
            notify.success("You are now logged-in, Wellcome!")
            navigate("/furniture")            
        } 
        catch (err: any) {
            notify.error(err)
        }        
    }

    return(
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>
                <label>User Name:</label>
                <input type="text" {...register("username")} /> <br />
                <label>Password:</label>
                <input type="password" {...register("password")} /> <br />

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login