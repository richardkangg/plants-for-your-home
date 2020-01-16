import React from 'react';
import './styles/View.css';
import { api } from '../services/ApiConfig';
import Navigation from './Navigation'

export default class View extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = async () => {
        try {
            const users = await api.get('/users')
            console.log(users.data.users)
            this.setState({ users: users.data.users })
        } catch (error) {
            console.error(error)
        }
    }

    renderUsers = () => {
        const {
            history
        } = this.props
        if (this.state.users.length) {
            return this.state.users.map((user) => (
                <div key={user.id} className="user" onClick={() => history.push(`/plants/${user.id}`)} >
                    <img className="image" alt={`${user.name} Plants`} src="https://i.imgur.com/dcmluDS.jpg" />
                    <h2 className="name">{user.name}'s Plants</h2>
                </div>
            ))
        }
    }

    render() {
        return (
            <div className="viewAll">
                <Navigation />
                <div className="users">
                    {this.renderUsers()}
                </div>
            </div>
        )
    }
}