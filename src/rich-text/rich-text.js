import React, { Component } from 'react'

class RichText extends Component {

    constructor () {
        super()
        this.state = {
            content: '<h1>富文本</h1>'
        }
    }
    
    render () {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
        )
    }
}

export default RichText