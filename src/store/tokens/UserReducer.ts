import { Action } from './actions';

export interface UserState {
    tokens: string,
    id: string,
    tipo_usuario: string,
}

const initialState = {
    tokens: "",
    id: "",
    tipo_usuario: ""
}

export const userReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokens: action.payload, id: state.id, tipo_usuario: state.tipo_usuario }
        }
        case "ADD_ID": {
            return { id: action.payload, tokens: state.tokens, tipo_usuario: state.tipo_usuario }
        }
        case "ADD_TIPO": {
            return { tipo_usuario: action.payload, id: state.id, tokens: state.tokens }
        }

        default:
            return state
    }
}