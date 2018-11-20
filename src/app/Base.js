import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Cookie from './cookie/Layout'
import Coffee from './coffee/Layout'

class Base extends Component {

    constructor(props){
        super(props);
        this.state = {
            cookie: false,
            coffee: false
        }

        this.cookieClick = this.cookieClick.bind(this);
        this.coffeeClick = this.cookieClick.bind(this);

    }

    cookieClick(){
        this.setState({ 
            cookie: true,
            coffee: false });
    }

    coffeeClick(){
        this.setState({
            cookie: false,
            coffee: true
        })
    }

    pick(){
        if(this.state.coffee) return <Coffee/>;
    }

    render() {
        return (
            <div>
                "Hello"
                <button onClick={this.coffeeClick}>coffee</button>
                {this.pick()}
            </div>
        );
    }
}

export default Base;
