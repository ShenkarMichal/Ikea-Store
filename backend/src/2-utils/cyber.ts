import { Request } from "express";
import UserModel from "../4-models/user-model";
import jwt from "jsonwebtoken"

const secretKey = "ikeaStore"

function getNewToken(user:UserModel): string {

    delete user.password

    const container = {user}
    const options = {expiresIn: "3h"}
    const token = jwt.sign(container, secretKey, options)
    return token    
}

function verifyToken(request : Request):Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject)=>{
        try {
            const header = request.headers.authorization
            if(!header){
                resolve(false)
                return
            }
            const token = header.substring(7)
            if(!token){
                resolve(false)
                return
            }
            jwt.verify(token,secretKey, err =>{
                if(err){
                    resolve(false)
                    return
                }
                resolve(true)
            })
            
        } 
        catch (err: any) {
            reject(err)
        }
    })
}

export default {
    getNewToken,
    verifyToken
}