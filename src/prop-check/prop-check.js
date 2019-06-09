import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropCheck extends Component {
    static propTypes = {
        val: PropTypes.number.isRequired
    }

    render () {
        return (
            <div>
                <div>{typeof(this.props.val)}</div>
                <div>{JSON.stringify(this.props.val)}</div>
            </div>
        )
    }
}

export default PropCheck