import React, { Component } from 'react'
import wrapWithLoadData from './NewComponent'

class InputWithUserName extends Component {
    render () {
        return <input type="text" value={this.props.data} />
    }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')
export default InputWithUserName