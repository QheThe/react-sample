import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import React, { Component } from 'react'

class Always extends Component {
    render() {
        return (
            <div>This will always render</div>
        )
    }
}

class Contact extends Component {
    render () {
        return (
            <div>
                <h1>Contact</h1>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </div>
                <div>Libero nostrum hic doloribus vitae rem recusandae corrupti magnam saepe quod vero cum molestiae, </div>
                <div>molestias esse minima dolore, aut natus? </div>
                <div>Saepe, facere.</div>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </div>
                <div>Libero nostrum hic doloribus vitae rem recusandae corrupti magnam saepe quod vero cum molestiae, </div>
                <div>molestias esse minima dolore, aut natus? Saepe, facere.</div>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/about">about</Link>
                <span> | </span>
                <Link to="/contact">contact</Link>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Always} />
                </Switch>
            </div>
        )
    }
}

class R1 extends Component {
    render() {
        return (
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )
    }
}

export default R1