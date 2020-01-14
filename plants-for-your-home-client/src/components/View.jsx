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
            // match: { path },
            history
        } = this.props
        if (this.state.users.length) {
            return this.state.users.map((user) => (
                <div key={user.id} className="userPreview" onClick={() => history.push(`/plants/${user.id}`)} >
                    <img className="previewPic" src="" />
                    <div className="previewBar">
                        <h2 className="previewName">{user.name}</h2>
                    </div>
                </div>
            ))
        }
    }

    render() {
        return (
            <div className="viewAll">
                <Navigation />
                <div className="usersList">
                    {this.renderUsers()}
                </div>
            </div>
        )
    }
}