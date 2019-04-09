import React from 'react';
import { Route } from 'react-router-dom'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

//functional component
export default () => {
    //if the exact prop is missing, any route will match with the "/" route
    return (
        <div>
            <Route path="/post" component={CommentBox}/>
            <Route path="/" exact component={CommentList}/>
        </div>
    )
}

