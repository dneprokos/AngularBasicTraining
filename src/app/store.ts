import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';
import { ICountingState, COUNTING_INITIAL_STATE, countingReducer } from './countingRedux/store';
import { combineReducers } from 'redux';

export interface IAppState {
    tasking: ITaskingState;
    counting: ICountingState;
}

export const INITIAL_STATE: IAppState = {
    tasking: TASKING_INITIAL_STATE,
    counting: COUNTING_INITIAL_STATE
}

export const rootReducer = combineReducers({
    tasking: taskingReducer,
    counting: countingReducer
});