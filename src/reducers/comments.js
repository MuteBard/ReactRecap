import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'

export default function(state = [], action){
    switch (action.type){
        case SAVE_COMMENT:
        //take all of our existing comments and put it on this array and we will add on top of that the new comment that has been entered
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name)
            return [...state, ...comments]
        default:
            return state;
    }
}