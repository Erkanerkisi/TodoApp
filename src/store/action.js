export function additem(data){
    return{
        type:'ADD',
        payload : data
    }
}

export function deleteItem(data){
    return{
        type:'DELETE',
        payload : data
    }
}

export function toggleItem(data){
    return{ 
        type:'TOGGLE',
        payload : data
    }
}
export function handleChange(data){
    return{ 
        type:'CHANGE',
        payload : data
    }
}