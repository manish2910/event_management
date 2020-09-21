import {
    NO_DISCOUNT,
    FREE,
    DISCOUNT,
    ADD_EVENT,
    RESET,
    ERROR,
    NO_ERROR
} from '../types/types';

const initialState = {
    lists:JSON.parse(localStorage.getItem('events')) || [],
    filtered:[],
    errors:""
}

const eventReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_EVENT:
            let events = [action.payload, ...state.lists];
            localStorage.setItem("events", JSON.stringify(events));
            return {
                ...state,
                lists:events
            };
        case NO_DISCOUNT:
            return {
                ...state,
                filtered:state.lists.filter(e => Number(e.discount) === 0)
            };
        case FREE:
            return {
                ...state,
                filtered:state.lists.filter(e => Number(e.price) === 0)
            };
        case DISCOUNT:
            return {
                ...state,
                filtered:state.lists.filter(e => Number(e.discount) !== 0)
            };
        case RESET:
            return {
                ...state,
                filtered:[]
            };
        case ERROR:
            return {
                ...state,
                errors:action.payload
            };
        case NO_ERROR:
            return {
                ...state,
                errors:action.payload
            };
        default:
            return state;
    }
};

export default eventReducer;