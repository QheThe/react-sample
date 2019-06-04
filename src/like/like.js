import React, { Component } from 'react'

class LikeButton extends Component {
    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
        // setState 函数传参
        this.setState(prevState => {
            console.log(prevState)
            return { isLiked: !prevState.isLiked }
        })
        // 上边操作两次组件的状态实际上 react 会将多次的状态操作合并为一次
    }
    
    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked? '取消' : '点赞'} 👍
            </button>
        )
    }
}

export default LikeButton