
import React, { Component } from 'react'

export default class UserInfo extends Component {
    render() {
        return (
            <div>
            <h3>Form Data</h3>
            <p>UserName:  {this.props.UserName}</p>
            <p>Password: {this.props.Password}</p>
            <p>Age: {this.props.Age}</p>
            <p>Gender: {this.props.Gender}</p>
            <p>Occupation: {this.props.Occupation}</p>
            </div>
        )
    }
}