import { createStore } from "redux";
import UserModel from "../4-Models/UserModel";
import jwtDecode from "jwt-decode";


export class AuthState {
    public user:UserModel = null
    public token:string = null
}

export enum AuthActionType {
    Register,
    Login,
    Logout
}

export interface AuthAction {
    type: AuthActionType,
    payload: string
}

export function authReducer(currentState = new AuthState(), action: AuthAction ): AuthState {

    let newState = {...currentState}

    switch (action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload
            const container:{user: UserModel} = jwtDecode(newState.token)
            newState.user = container.user                       
            break        
        case AuthActionType.Logout:
            newState.token = null
            newState.user = null
            break
    }

    return newState
}

export const authStore = createStore(authReducer)