import {
    NO_DISCOUNT,
    FREE,
    DISCOUNT,
    ADD_EVENT,
    RESET,
    ERROR,
    NO_ERROR
} from '../types/types';
import { v4 } from 'uuid';

export const noDiscount = list => dispatch => {
    return dispatch({ type:NO_DISCOUNT })
}

export const free = list => dispatch => {
    return dispatch({ type:FREE })
}

export const discount = list => dispatch => {
    return dispatch({ type:DISCOUNT })
}

export const addEvent = event => dispatch => {
    let data = {
        id:v4(),
        ...event
    }
    return dispatch({ type:ADD_EVENT, payload: data })
}

export const reset = list => dispatch => {
    return dispatch({ type:RESET })
}

export const error = error => dispatch => {
    return dispatch({ type:ERROR, payload:error })
}

export const noError = error => dispatch => {
    return dispatch({ type:NO_ERROR, payload:error })
}