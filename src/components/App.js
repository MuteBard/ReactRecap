import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'


class App extends Component{
    
    renderButton(){
        if(this.props.auth){
            return <button>Sign Out</button>
        }else{
            return <button>Sign In</button>
        }
    }

    renderHeader(){
        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post A Comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }
    
    render() {
        //if the exact prop is missing, any route will match with the "/" route
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { auth : state.auth };
}

export default connect(mapStateToProps)(App)