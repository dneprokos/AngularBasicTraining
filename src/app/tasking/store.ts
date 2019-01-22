import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS } from './actions';
import { tassign } from 'tassign'

export interface ITaskingState {
    todos: any[];
    lastUpdate: Date;
}

export const TASKING_INITIAL_STATE: ITaskingState = {
    todos: [],
    lastUpdate: null
}

//#region Helpers functions

function addTodo(state, action) {
    var newTodo = { id: state.todos.length + 1, title: action.title };

    return tassign(state, {
        // Instead of the push() method, we use the concat() method because the former mutates
        // the original array, whereas the latter returns a new array. 
        todos: state.todos.concat(newTodo),
        lastUpdate: new Date()
    });
}

function toggleTodo(state, action) {

    var todo = state.todos.find(t => t.id === action.id);
    var index = state.todos.indexOf(todo);

    return tassign(state, {
        todos: [
            ...state.todos.slice(0, index),

            tassign(todo, { isCompleted: !todo.isCompleted }),
            ...state.todos.slice(index + 1),
        ],
        lastUpdate: new Date()
    });
}

function removeTodo(state, action){
    return tassign(state, {
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      });
}

function clearTodo(state){
    return tassign(state, {
        todos: [],
        lastUpdate: new Date()
      });
}

//#endregion

export function taskingReducer(state: ITaskingState = TASKING_INITIAL_STATE, action): ITaskingState {
    switch (action.type) {
        case ADD_TODO: return addTodo(state, action);
        case TOGGLE_TODO: return toggleTodo(state, action);
        case REMOVE_TODO: return removeTodo(state, action);
        case CLEAR_TODOS: return clearTodo(state);
    }
    return state;
}