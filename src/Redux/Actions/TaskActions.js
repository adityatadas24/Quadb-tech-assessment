

export const ADD_TASK = "ADD_TASK"
export const TOGGLE_TASK = "TOGGLE_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const IMPORTANT_TASK = "IMPORTANT_TASK"



export const addtask = (task)=>{
    return {
        type:ADD_TASK,
        payload:{
            id:Date.now(),
            ...task,
            complete:false,
            imp:false
        }
    }
}

export const toggletask = (id)=>{
    return {
        type:TOGGLE_TASK,
        payload:id
    }
}

export const deletetask = (id)=>{
    return {
        type:DELETE_TASK,
        payload:id
    }
}

export const imptask = (id)=>{
    return {
        type:IMPORTANT_TASK,
        payload:id
    }
}
