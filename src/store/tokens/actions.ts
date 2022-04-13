export type Action = {type: string; payload: string}

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token 
})

export const addId = (id: string): Action =>({
    type: "ADD_ID",
    payload: id 
})

export const addTipo = (tipo_usuario:string): Action =>({
    type:"ADD_TIPO",
    payload: tipo_usuario
    
})