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
        const likedText = this.props.likedText ||'取消'
        const unlikedText = this.props.unlikedText || '点赞'
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {/* {this.state.isLiked? '取消' : '点赞'} 👍 */}
                {this.state.isLiked? likedText : unlikedText} 👍
            </button>
        )
    }
}

export default LikeButton