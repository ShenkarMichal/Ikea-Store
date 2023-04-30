import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { AuthErrorModel } from "../4-models/errors-model";
import UserModel from "../4-models/user-model";
import cyber from "../2-utils/cyber";
import CredentialsModel from "../4-models/credentials-model";

async  function isUserExists(user: UserModel): Promise<boolean> {
    const sql = "SELECT COUNT(*) FROM users WHERE username = ?"
    const isUser = await dal.execute(sql,[user.username])[0]
    console.log(isUser)
    return isUser > 0
}

async function register(user:UserModel):Promise<string> {
   
    if(await isUserExists(user)) throw new AuthErrorModel("The username is already exists")

    user.password = cyber.hash(user.password)
    const sql = "INSERT INTO users VALUES(DEFAULT,?,?,?,?)"              
               
    //Add the user to database
    const info: OkPacket = await dal.execute(sql,[user.firstName,user.lastName,user.username,user.password])
    user.id = info.insertId
    
    const token = cyber.getNewToken(user)
    return token                
}

async function login(credential:CredentialsModel):Promise<string> {
    credential.password = cyber.hash(credential.password)
    const sql ="SELECT * FROM users WHERE username = ? AND password = ?"
    const user = new UserModel(await dal.execute(sql, [credential.username,credential.password]))
    if(!user) throw new AuthErrorModel("username or password incorrect!")
    
    const token = cyber.getNewToken(user)
    return token
}

export default {
    register,
    login
}