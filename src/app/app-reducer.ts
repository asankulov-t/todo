import {Dispatch} from "redux";
import {authApi} from "../api/todolists-api";
import {setIsLoggedInAC} from "../components/Login/authReducer";

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    initialize:false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case "APP/SET-INIT":
            return {...state, initialize:action.init}
        default:
            return {...state}
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    initialize:boolean
}

export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setInitialize=(init:boolean)=>({type:'APP/SET-INIT',init} as const)
export const initializeApAc=()=>(dispatch:Dispatch)=>{
    authApi.me().then((res)=>{
        if (res.data.resultCode===0){
            dispatch(setIsLoggedInAC(true))
            dispatch(setInitialize(true))
        }else {
            dispatch(setInitialize(true))
        }
    }).finally(()=>setInitialize(true))
}
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetInitializeType=ReturnType<typeof setInitialize>
type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetInitializeType
