class Config{
    public furnitureURL = "http://localhost:3001/api/furniture/"
    public furnitureTypeURL = "http://localhost:3001/api/furniture-type/"
    public furnitureByTypeURL = "http://localhost:3001/api/furniture-by-furniture-type/"
    public registerURL = "http://localhost:3001/api/auth/register/"
    public loginURL = "http://localhost:3001/api/auth/login/"
}

const appConfig = new Config()
export default appConfig