import React from 'react'
import { Component } from 'react';

class InputField extends Component {
    render() {
        return (
                <input 
                    type={this.props.type}
                    className="userInput" 
                    placeholder={this.props.placeholder}
                    value={ this.props.value} 
                    onChange={ (e) => this.props.onChange(e.target.value) }
                />
        )
    }
}

export default InputField;