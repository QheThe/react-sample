const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export default function(state, action) {
    if (!state) {
        state = { comments: [] }
    }
    switch (action.type) {
        case INIT_COMMENTS:
            // 初始化评论
            return { comments: action.comments }
        case ADD_COMMENT:
            // 添加评论
            return {
                comments: [...state.comments, action.comment]
            }
        case DELETE_COMMENT:
            // 删除评论
            return {
                comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex + 1)
                ]
            }
        default:
            return state
    }
}

// action creator
export const initComments = (comment) => {
    return { type: INIT_COMMENTS, comment}
}

export const addComment = (comment) => {
    return { type: ADD_COMMENT, comment}
}

export const deleteComment = (comment) => {
    return { type: DELETE_COMMENT, comment}
}