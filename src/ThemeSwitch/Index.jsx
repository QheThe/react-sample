import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import PropTypes from 'prop-types'

// 创建一个 store
function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}

// 初始化 reducer
const themeReducer = (state, action) => {
    if (!state) return {
      themeColor: 'red'
    }
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
}

const store = createStore(themeReducer)

class Theme extends Component {
    // 子组件 context 类型 （使用 context 必须）
    static childContextTypes = {
        store: PropTypes.object
    }

    // 获取 context 时要做的操作
    getChildContext () {
        return { store } 
    }

    render () {
        return (
           <div className="theme">
               <Header/>
               <Content />
           </div> 
        )
    }
}

export default Theme