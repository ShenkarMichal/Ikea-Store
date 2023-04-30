import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { AuthErrorModel } from "../4-models/errors-model";
import UserModel from "../4-models/user-model";
import cyber from "../2-utils/cyber";

async function register(user:UserModel):Promise<string> {


    //Check if username is already exists
    const valodateUsernameSql = `SELECT COUNT(*) FROM users
                                 WHERE username = '${user.username}'`
    const isUser = await dal.execute(valodateUsernameSql)[0]
   
    if(isUser > 0) throw new AuthErrorModel("The username is already exists")

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

export default {
    register
}