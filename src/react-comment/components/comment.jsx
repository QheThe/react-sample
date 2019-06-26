import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object,
    onDlete: PropTypes.func
  }

  render() {
    return (
      <div>
        <span>{this.props.comment.username}:</span>
        <br/>
        <span>{this.props.comment.userComment}</span>
        <button onClick={this.props.onDlete}>x</button>
      </div>
    )
  }
}

export default Comment
