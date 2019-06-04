import React, { Component } from 'react'

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      userComment: ''
    }
  }

  handleSubmit () {
    if (!this.state.username) return alert('请填写用户名')
    if (!this.state.userComment) return alert('请填写评论')
    console.log(this.state)
    this.props.updateCommentList(this.state)
  }

  handleUsernameInput (e) {
    this.setState({
      username: e.target.value
    })
    console.log(this.state)
  }

  handleCommentInput (e) {
    this.setState({
      userComment: e.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="CommentApp">
        <div>
          <span>用户名</span>
          <input  onInput={this.handleUsernameInput.bind(this)} type="text" />
        </div>
        <div>
          <span>评论内容</span>
          <textarea onInput={this.handleCommentInput.bind(this)} cols="30" rows="10"></textarea>
        </div>
        <button onClick={this.handleSubmit.bind(this)}>发布</button>
      </div>
    )
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        <span>{this.props.comment.username}:</span>
        <br/>
        <span>{this.props.comment.userComment}</span>
      </div>
    )
  }
}

class CommnetList extends Component {
  
  render() {
    return (
      <div className="CommnetList">
        {
          this.props.commentList.map((comment, i) => {
            return (
              <Comment comment={comment} key={i}/>
            )
          })
        }
      </div>
    )
  }
}

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      commentsArr: [
        {
          username: 'Quartz',
          userComment: '你萌好鸭!'
        }
      ]
    }
  }

  updateCommentList (comment) {
    this.setState(prevState => {
      return prevState.commentsArr.push(comment)
    })
    console.log('CommetApp State', this.state)
  }
  
  render() {
    return (
      <div className="CommentApp">
        <CommentInput updateCommentList={this.updateCommentList.bind(this)} />
        <CommnetList commentList={this.state.commentsArr}/>
      </div>
    )
  }
}

export default CommentApp