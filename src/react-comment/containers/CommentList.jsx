import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommnetList from '../components/comment-list'
import { initComments, deleteComment } from '../reducers/comments'

// commentlistcontainer
// 一个 Smart 组件，负责评论列表数据的加载、初始化、删除评论
// 沟通 CommentList 和 state

// 数据流向
// store -> context -> connect -> CommentListContainer -> CommnetList

class CommentListContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        initComments: PropTypes.func,
        onDeleteComment: PropTypes.func
    }

    componentWillMount () {
        // componentWillMount 生命周期中初始化评论
        this._loadComments()
    }

    _loadComments () {
        // 此时 state.comment 为 []
        // 从 LocalStorage 中加载评论
        let comments = localStorage.getItem('comments')
        comments = comments ? JSON.parse(comments) : []
        // this.props.initComments 
        // 是 connect 通过 prop 传进来的
        // 初始化 state 中的 comments
        this.props.initComments(comments)
    }

    handleDeleteComment (index) {
        const { comments } = this.props
        // props 是不能变的，所以这里新建了一个删除了指定下标的评论列表
        const newComments = [
            // 截取 index 之前的元素 的元素
            ...comments.slice(0, index),
            // 截取 index 之后的元素 的元素
            ...comments.slice(index + 1)
        ]
        // 更新 localStorage 中的 comments
        localStorage.setItem('comments', JSON.stringify(newComments))
        if (this.props.onDeleteComment) {
            // 更新 state 中的 comments
            this.props.onDeleteComment(index)
        }
    }

    render () {
        <CommnetList 
        comments={this.props.comments}
        onDeleteComment={this.handleDeleteComment} />
    }
}

// 评论表从 state.comments 中获取
const mapStateToProps = (state) => {
    return {
        comment: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initComments: (commentIndex)
    }
}