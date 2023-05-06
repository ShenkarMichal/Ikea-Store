import { useForm } from "react-hook-form"
import "./Register.css"
import UserModel from "../../../4-Models/UserModel"
import authService from "../../../3-Services/AuthService"
import { useNavigate } from "react-router-dom"
import ReCaptcha from 'react-google-recaptcha'
import { useState } from "react"

function Register(): JSX.Element {

    const [isBot, setIsBot] = useState<boolean>(true)

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

    function reCaptchaChecked(value: string): void {
        setIsBot(value?.length === 0)
    }

    return(
        <div className="Register">
            <form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input type="text" {...register("firstName")} required/> <br />
                <label>Last Name:</label>
                <input type="text" {...register("lastName")} required/> <br />
                <label>User Name:</label>
                <input type="text" {...register("username")} required /> <br />
                <label>Password:</label>
                <input type="password" {...register("password")} required/>

                <div className="ReCaptchContainer">
                    <ReCaptcha sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={reCaptchaChecked} />
                </div>

                <button disabled={isBot}>Register</button>
            </form>
        </div>
    )
}

export default Register