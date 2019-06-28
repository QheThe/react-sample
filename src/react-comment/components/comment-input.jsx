import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }

  constructor () {
    super()
    this.state = {
      username: '',
      userComment: ''
    }
  }

  componentDidMount () {
    this.setState({
      username: this.props.username
    })
    this.textarea.focus()
  }

  handleUsernameBlur() {
    this.props.onUsernameInputBlur(this.state.username)
  }

  handleSubmit () {
    if (!this.state.username) return alert('请填写用户名')
    if (!this.state.userComment) return alert('请填写评论')
    this.props.onSubmit(this.state)
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
      <div className="comment-input">
        <div className="form-item">
          <span>用户名:</span>
          <input
          onChange={this.handleUsernameInput.bind(this)}
          onBlur={this.handleUsernameBlur.bind(this)}
          value={this.state.username}
          type="text"
          />
        </div>
        <div className="form-item">
          <span>评论内容:</span>
          <textarea
          ref={(textarea) => this.textarea = textarea}
          onInput={this.handleCommentInput.bind(this)}
          value={this.state.content}
          cols="30"
          rows="10"></textarea>
        </div>
        <button onClick={this.handleSubmit.bind(this)}>发布</button>
      </div>
    )
  }
}

export default CommentInput