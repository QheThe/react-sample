import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'

const store = createStore(commentsReducer)

class FinalCommentApp extends Component {
    render () {
        return (
            <Provider store={store}>
                <CommentApp/>
            </Provider>
        )
    }
}

export default FinalCommentApp