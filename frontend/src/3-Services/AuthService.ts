import axios from "axios";
import UserModel from "../4-Models/UserModel";
import appConfig from "../2-Utils/Config";
import { AuthActionType, authStore } from "../Redux/AuthState";
import CredentialsModel from "../4-Models/CredentialsModel";

class AuthService {
    public async register(user:UserModel): Promise<void> {

        const response = await axios.post<string>(appConfig.registerURL, user)
        const token = response.data
        authStore.dispatch({type: AuthActionType.Register, payload:token})
    }

    public async login(credential: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginURL, credential)
        const token = response.data
        authStore.dispatch({type: AuthActionType.Login, payload:token})
    }

    public logout(): void {
        authStore.dispatch({type:AuthActionType.Logout})
    }    
}

const authService = new AuthService()
export default authService