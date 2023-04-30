import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { AuthErrorModel } from "../4-models/errors-model";
import UserModel from "../4-models/user-model";
import cyber from "../2-utils/cyber";
import CredentialsModel from "../4-models/credentials-model";

async  function isUserExists(user: UserModel): Promise<boolean> {
    const sql = `SELECT COUNT(*) FROM users
                                 WHERE username = '${user.username}'`
    const isUser = await dal.execute(sql)[0]
    return isUser === 0
}

async function register(user:UserModel):Promise<string> {
   
    if(!await isUserExists(user)) throw new AuthErrorModel("The username is already exists")

    const sql = `INSERT INTO users
                VALUES(
                    DEFAULT,
                    '${user.firstName}',
                    '${user.lastName}',
                    '${user.username}',
                    '${user.password}'
                )`
    //Add the user to database
    const info: OkPacket = await dal.execute(sql)
    user.id = info.insertId
    
    const token = cyber.getNewToken(user)
    return token                
}

async function login(credential:CredentialsModel):Promise<string> {
    const sql =`SELECT * FROM users
                    WHERE username = '${credential.username}' AND password = '${credential.password}'`
    const user = new UserModel(await dal.execute(sql))
    if(!user) throw new AuthErrorModel("username or password incorrect!")
    
    const token = await cyber.getNewToken(user)
    return token
}

export default {
    register,
    login
}