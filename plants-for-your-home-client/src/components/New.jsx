import React, { Component } from 'react'
import Form from './Form'
import { api } from '../services/ApiConfig';

export default class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            errorMsg: '',
        }
    }

    componentDidMount() {
        this.setState({errorMsg: ''})
      }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name } = this.state
        const data = {
            name
        }
        api.post('/users', data)
            .then((res) => res.status === 201 ? this.props.history.push('/users') : null)
            .then(console.log('Created!'))
            .catch(() => this.setState({ errorMsg: 'There was an error!' }))
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    render() {
        const { name } = this.state
        return (
            <div className="add">
            <div className="addForm">
                <Form
                    formData={{ name }}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                {this.state.errorMsg ? (
                    <p className="error-text">{this.state.errorMsg}</p>
                ) : null}
            </div>
            </div>
        )
    }
}