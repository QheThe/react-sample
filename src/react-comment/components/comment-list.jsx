import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'

class CommnetList extends Component {
  static propTypes = {
    onDleteComment: PropTypes.func.isRequired,
    comments: PropTypes.array
  }

  handleDeleComment (index) {
    this.props.onDleteComment(index)
  }

  render() {
    return (
      <div className="CommnetList">
        {
          this.props.comments.map((comment, i) => {
            return (
              <Comment onDlete={this.handleDeleComment.bind(this, i)} comment={comment} key={i}/>
            )
          })
        }
      </div>
    )
  }
}

export default CommnetList