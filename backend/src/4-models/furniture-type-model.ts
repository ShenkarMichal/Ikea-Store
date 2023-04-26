class FurnitureTypeModel {
    public furnitureTypeID: number
    public furnitureTypeName: string

    public constructor(futnitureType: FurnitureTypeModel){
        this.furnitureTypeID = futnitureType.furnitureTypeID
        this.furnitureTypeName = futnitureType.furnitureTypeName
    }
}

export default FurnitureTypeModel