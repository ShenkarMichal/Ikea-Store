import { createStore } from "redux";
import FurnitureModel from "../4-Models/FurnitureModel";

export class FurnitureState {
    public furniture: FurnitureModel
}

export enum FurnitureActionType {
    GetFurniture,
    AddFurniture
}

export interface FurnitureAction {
    type: FurnitureActionType,
    payload: any
}

export function furnitureReducer(currentState = new FurnitureState(), action: FurnitureAction): FurnitureState {

    const newState = {...currentState}

    switch (action.type){
        case FurnitureActionType.AddFurniture:

            break
        case FurnitureActionType.GetFurniture:

            break
    }

    return newState
}

export const furnitureStore = createStore(furnitureReducer)