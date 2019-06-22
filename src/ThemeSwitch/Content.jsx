import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './Connect' 

function mapStateToProps (state) {
    return {
        themeColor: state.themeColor
    }
}

class Content extends Component {
    PropTypes = {
        themeColor: PropTypes.string
    }

    render () {
        return (
            <div className="content">
                <h1 style={{ color: this.props.themeColor }}>Theme Content</h1>
            </div>
        )
    }
}

Content = connect(mapStateToProps)(Content)

export default Content