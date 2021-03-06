// Responsible for creating Asyncronus action creators, or action creators that return a 
// promise on the payload property

export default ({ dispatch }) => next => action => {
    // Ckeck to see if the action has a promise on it's
    // 'payload' property. 
    // If it does, then wait for it to resolve
    // If it doesn't send the action to the next middleware
    if(!action.payload || !action.payload.then){
        return next(action)
    }

    // We want to wait for the promise to resolve
    // (get its data!!) and then create a new action
    // with that data and dispatch it       
    action.payload.then(function(response){
        const newAction = { ...action, payload: response }
        dispatch(newAction);
    })
}
    






