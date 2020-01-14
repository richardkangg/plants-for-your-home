import React, { Component } from 'react';
import "./styles/Plants.css"
import { api } from '../services/ApiConfig';

class Plants extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            plants: [],
            errorMsg: '',
        }
    }

    componentDidMount() {
        this.getPlants()
        console.log(this.state)
        console.log(this.props)
    }

    getPlants = async () => {
        const { match: { params }
        } = this.props
        try {
            const info = await api.get(`/users/${params.id}`)
            this.setState({
                plants: info.data.plants,
                name: info.data.user.name,
                errorMsg: '',
            })
            console.log(this.state)
        } catch (error) {
            console.error(error)
        }
    }

    async handleAdd() {
        const { match: { params }
        } = this.props
        let data =
        {
            stage: 'Fred',
            kind: 'Flintstone',
            image: 'test.png',
            user_id: params.id
        }
        api.post('/plants', data)
        .catch(() => this.setState({ errorMsg: 'There was an error!' }))
        this.getPlants()
    }

    renderPlants = () => {
        if (this.state.plants.length) {
            return this.state.plants.map((plant) => (
                <div key={plant.id} className="plantPreview" >
                    <img className="previewPic" src={plant.image} />
                    <div className="previewBar">
                        <h2 className="previewStage">{plant.stage}</h2>
                    </div>
                </div>
            ))
        }
    }

    renderShelf = () => {
        let shelfSpots = [1, 2, 3, 4, 5, 6, 7, 8, 9, , 10, 11, 12]
        return shelfSpots.map((spot) => (
            <div key={spot.id} className="spot" onClick={() => this.handleAdd()}>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <h1>Hello Plant World</h1>
                
                <div>{this.renderPlants()}</div>
                <div className="shelves">{this.renderShelf()}</div>
                <h2>{this.state.name}'s Plants</h2>
            </div>
        )
    }
}

export default Plants;