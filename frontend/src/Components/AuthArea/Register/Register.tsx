import { useForm } from "react-hook-form"
import "./Register.css"
import UserModel from "../../../4-Models/UserModel"
import authService from "../../../3-Services/AuthService"
import { useNavigate } from "react-router-dom"

function Register(): JSX.Element {

    const {register, handleSubmit} = useForm<UserModel>()
    const navigate = useNavigate()

    async function send(user:UserModel){
        try {
            authService.register(user)
            navigate("/furniture")            
        } 
        catch (err: any) {
            console.log(err)
        }

    }
    return(
        <div className="Register">
            <form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input type="text" {...register("firstName")} /> <br />
                <label>Last Name:</label>
                <input type="text" {...register("lastName")}/> <br />
                <label>User Name:</label>
                <input type="text" {...register("username")} /> <br />
                <label>Password:</label>
                <input type="password" {...register("password")}/>

                <button>Send</button>
            </form>
        </div>
    )
}

export default Register