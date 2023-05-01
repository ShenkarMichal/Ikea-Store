import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authStore } from "../Redux/AuthState"
import notify from "../3-Services/NotifyService"

function useVerifyLoggedIn() {

    const navigate = useNavigate()
    useEffect(()=>{

        if(!authStore.getState().token){
            notify.error("You are not logged in!")
            navigate("/auth/login")
        }

    },[])

}

export default useVerifyLoggedIn