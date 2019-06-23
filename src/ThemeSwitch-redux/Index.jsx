import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import ThemeSwitcher from './ThemeSwitcher'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

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

class Theme2 extends Component {
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
            <Provider store={store}>
                <div className="theme">
                    <Header/>
                    <Content/>
                    <ThemeSwitcher/>
                </div> 
            </Provider>
        )
    }
}

export default Theme2