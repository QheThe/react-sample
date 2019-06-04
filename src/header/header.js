import React, { Component } from 'react'

class Title extends Component {
    handleClickOnTitle (e) {
        console.log('事件对象', e)
        console.log('组件实例', this)
        window.alert('Click on title')
    }

    render() {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this)}>react 小书</h1>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <div>
                <Title />
                <h2>This is header</h2>
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main content</h2>
            </div>
        )
    }
}

class Footer extends Component {
    render () {
        return (
            <div>
                <h2>This is footer</h2>
            </div>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default Index