class CredentialsModel {
    public username: string
    public password: string

    public constructor(credential: CredentialsModel){
        this.username = credential.username
        this.password = credential.password
    }
}

export default CredentialsModel