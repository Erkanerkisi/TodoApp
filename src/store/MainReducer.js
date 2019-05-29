const initialState = {
    items: []
} 

const AddReducer = (state=initialState,action) => {
    const newState = {...state};
    if(action.type === 'ADD'){
        let todos = [...newState.items];
        todos.push({
                value:action.payload,
                isCompleted:false
            });
        newState.items = todos
    }
    else if(action.type === 'DELETE'){
        let todos = [...newState.items];
        todos.splice(action.payload,1);
        newState.items = todos
    }
    else if(action.type === 'TOGGLE'){
        let todos = [...newState.items];
        todos[action.payload].isCompleted = !todos[action.payload].isCompleted
        newState.items = todos
    }

    return newState;
}

export default AddReducer;