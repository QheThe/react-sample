import React, { Component } from 'react'

class AutoFocus extends Component {
    componentDidMount () {
        this.input.focus()
    }

    render () {
        return (
            <input ref={ input => this.input = input } type="text"/>
        )
    }
}

export default AutoFocus
