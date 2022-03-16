import { combineReducers, createStore, applyMiddleware } from "redux";
//@ts-ignore
import thunkMiddleware from 'redux-thunk';
import authReducer from "./reducers/auth-reducer";


let rootReducer = combineReducers({
	auth: authReducer
})

// For reducers
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

// For actions
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
// @ts-ignore
window.store = store;