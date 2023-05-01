import { createStore } from "redux";
import FurnitureTypeModel from "../4-Models/FurnitureTypeModel";

export class FurnitureTypeState {
    public furnitureType: FurnitureTypeModel = null
}

export enum FurnitureTypeActionType {
    GetFurnitureTypeID = "GetFurnitureTypeID"
}

export interface FurnitureTypeAction {
    type: FurnitureTypeActionType
    payload: any
}

export function FurnitureTypeReducer(currentState = new FurnitureTypeState(), action:FurnitureTypeAction ): FurnitureTypeState {
    const newState = {...currentState}

    switch (action.type) {

        case FurnitureTypeActionType.GetFurnitureTypeID:
            newState.furnitureType = action.payload
            break
    }

    return newState
}

export const furnitureTypeStore = createStore(FurnitureTypeReducer)