import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    } 

    render () {
        return (
            <div className="header">
                <h1 style={{ color: this.props.themeColor }}>Theme Header</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.themeColor
    }
}

Header = connect(mapStateToProps)(Header)

export default Header