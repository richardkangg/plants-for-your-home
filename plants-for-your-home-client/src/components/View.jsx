import React from 'react';
import './styles/View.css';
import { api } from '../services/ApiConfig';
import Navigation from './Navigation'

export default class View extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            plants: []
        }
    }

    componentDidMount() {
        this.fetchUsers()
        this.fetchPlants()
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

    fetchPlants = async () => {
        try {
            const plants = await api.get('/plants')
            this.setState({ plants: plants.data.plants })
        } catch (error) {
            console.error(error)
        }
    }

    renderUsers = () => {
        const {
            history
        } = this.props
        if (this.state.users.length) {
            return this.state.users.map((user) => {
                let plant = this.state.plants.find(x => x.user_id === user.id);
                if (typeof plant === 'undefined') {
                    plant = {image: 'potbrown.png'}
                }
                return (
                <div key={user.id} className="user" onClick={() => history.push(`/plants/${user.id}`)} >
                    <img className="image" alt={`${user.name} Plants`} src={require(`../images/${plant.image}`)} />
                    <h2 className="name">{user.name}'s Plants</h2>
                </div>
            )})
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