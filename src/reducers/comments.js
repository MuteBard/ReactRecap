import { SAVE_COMMENT } from 'actions/types'

export default function(state = [], action){
    switch (action.type){
        case SAVE_COMMENT:
        //take all of our existing comments and put it on this array and we will add on top of that the new comment that has been entered
            return [...state, action.payload];
        default:
            return state;
    }
}