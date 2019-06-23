import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './Connect'

// 将 context state 绑定到当前组件 props
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

// 将 dispatch 绑定到当前组件 props
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

class ThemeSwitcher extends Component {
    // 校验传入的 prop
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }

    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                {/* 触发 prop 传入的 dispatch */}
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}
                >Red</button>
                <span> </span>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}
                >Blue</button>
            </div>
        )
    }
}

// 将 dispatch 绑定到当前组件 props
ThemeSwitcher = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher)

export default ThemeSwitcher