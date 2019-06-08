import React, { Component } from 'react'

class Clock extends Component {
    constructor () {
        super()
        this.state = {
            date: new Date()
        }
    }
    render () {
        return (
            <div>
                <h1>
                    <p>当前的时间是</p>
                    { this.state.date.toLocaleTimeString() }
                </h1>
            </div>
        )
    }
}

export default Clock