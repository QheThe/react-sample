import React, { Component } from 'react'
import PropTypes from 'prop-types'

//函数式编程             将state映射到prop      要被包装的组件
export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {
        // 验证 context 数据类型是否正确 （使用 context 必须）
        static contextTypes = {
            store: PropTypes.object
        }

        constructor () {
            super()
            // 初始化 state 存储包装组件传入的 props
            this.state = { allProps: {} } 
        }

        componentWillMount () {
            const { store } = this.context
            // 初始化 stateProps
            this._updateProps()
            // 订阅 context state 更新
            store.subscribe(() => this._updateProps())
        }

        _updateProps () {
            const { store } = this.context
            // 获取需要的 stateProps
            let stateProps = mapStateToProps(store.getState())
            // 触发 包装组件 再次包装
            this.setState({
                allProps: {
                    ...stateProps,
                    ...this.props
                }
            })
        }

        render () {
            // ... es6 展开运算符，会将 stateProps 中的对象展开来传入，被包装组件 props
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...this.state.allProps} />
        }
    }

    return Connect
}