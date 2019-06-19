import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Main from './Main'
import Title from './Title'

class Context extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }

    constructor () {
        super()
        this.state = { themeColor: 'red' }
    }

    getChildContext () {
        return { themeColor: this.state.themeColor }
    }

    render () {
        return (
            <div>
                <Header />
                <Title />
                <Main />
            </div>
        )
    }
}

export default Context