import { createStore } from "redux";
import FurnitureModel from "../4-Models/FurnitureModel";
import { composeWithDevTools } from "redux-devtools-extension";

export class FurnitureState {
    furniture: FurnitureModel[] = []
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

    let newState = {...currentState}

    switch (action.type){
        case FurnitureActionType.AddFurniture:
            newState.furniture.push(action.payload)
            break
        case FurnitureActionType.GetFurniture:
            newState.furniture = action.payload
            break
    }

    return newState
}

export const furnitureStore = createStore(furnitureReducer)