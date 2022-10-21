import { ADD_TODO_INPUT, SET_TODO_INPUT, DELETE_TODO_INPUT } from "./constants"

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    console.log("CURRENT STATE: ", state);
    console.log("ACTION: ", action);
    let newState;
    switch(action.type){
        case SET_TODO_INPUT:
            newState = {...state, todoInput: action.payload};
            break;
        case ADD_TODO_INPUT:
            newState = {...state, todos: [...state.todos, action.payload]};
            break;
        case DELETE_TODO_INPUT:
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);
            newState = {
                ...state,
                todos: newTodos
            }
            break;
        default:
            throw new Error('Invalid action');
    }
    return newState;
}

export {initState}
export default reducer