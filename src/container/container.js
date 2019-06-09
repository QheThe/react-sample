import React, { Component } from 'react'
import './container.css'

class Container extends Component {
    render () {
        return (
            <div className="Container">
                { this.props.children }
            </div>
        )
    }
}

class Card extends Component {
    render () {
        return (
            <Container>
                <div>容器内容</div>
                <div>容器内容</div>
                <div>容器内容</div>
                <div>容器内容</div>
                <div>容器内容</div>
            </Container>
        )
    }
}

export default Card