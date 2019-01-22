import { tassign } from 'tassign';
import { INCREMENT, DECREMENT } from './actions';

export interface ICountingState {
    counter: number;
    messaging?: {
        newMessages: number;
    }
}

export const COUNTING_INITIAL_STATE: ICountingState = {
    counter: 0,
    messaging: {
        newMessages: 5
    }
}

function increment(state): ICountingState {
    return tassign(state, { counter: state.counter + 1 });
}

function decrement(state): ICountingState {
    return tassign(state, { counter: state.counter - 1 });
}


export function countingReducer(state: ICountingState = COUNTING_INITIAL_STATE, action): ICountingState {
    switch (action.type) {
        case INCREMENT: return increment(state);
        case DECREMENT: return decrement(state);
    }
    return state;
}