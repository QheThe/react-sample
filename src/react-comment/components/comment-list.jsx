import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'

class CommnetList extends Component {
  static propTypes = {
    onDleteComment: PropTypes.func,
    comment: PropTypes.array
  }

  render() {
    return (
      <div className="CommnetList">
        {
          this.props.commentList.map((comment, i) => {
            return (
              <Comment onDlete={this.props.onDleteComment} comment={comment} key={i}/>
            )
          })
        }
      </div>
    )
  }
}

export default CommnetList