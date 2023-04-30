import UserModel from "../4-models/user-model";
import jwt from "jsonwebtoken"

const secretKey = "ikeaStore"

function getNewToken(user:UserModel): string {

    const container = {user}
    const options = {expiresIn: "3h"}
    const token = jwt.sign(container, secretKey, options)
    return token    
}

export default {
    getNewToken
}