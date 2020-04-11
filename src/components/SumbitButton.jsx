import React from 'react'
import { comparer } from 'mobx';
import { Component } from 'react';

class SubmitButton extends Component {

    render() {
        return (
                <button 
                    //type="submit" 
                    //value="Login" 
                    className="loginBtn"
                    disabled={this.props.disabled}
                    onClick={ () => this.props.onClick() }
                >   
                    {this.props.text}
                </button>
        );
    }
}


export default SubmitButton;