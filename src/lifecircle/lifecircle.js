import React, { Component } from 'react'

class CmpSample extends Component {
    
    componentWillMount () {
        console.log('componentWillMount')
    }
    
    componentDidMount () {
        console.log('componentDidMount')
    }
    
    componentWillUnmount () {
        console.log('componentWillUnmount')
    }
    
    render () {
        return (
            <div>
                <span>示例组件</span>
            </div>
        )
    }
}

class Lifecircle extends Component {

    constructor () {
        super()
        console.log('construct')
        this.state = {
            isShow: true
        }
    }

    handleToggle () {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.handleToggle.bind(this)}>toggle</button>
                {
                    this.state.isShow ?
                        <CmpSample />
                    :
                        null
                }
            </div>
        )
    }
}

export default Lifecircle