class FurnitureModel {
    public furnitureID: number
    public furnitureTypeID: number
    public name: string
    public description: string
    public size: string
    public color: string
    public price: number
    public discount: number

    public constructor(furniture: FurnitureModel){
        this.furnitureID = furniture.furnitureID
        this.furnitureTypeID = furniture.furnitureTypeID
        this.name = furniture.name
        this.description = furniture.description
        this.size = furniture.size
        this.color = furniture.color
        this.price = furniture.price
        this.discount = furniture.discount
    }

    //Validation
}

export default FurnitureModel