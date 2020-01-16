import React, { Component } from 'react';
import "./styles/Plants.css"
import { api } from '../services/ApiConfig';
import Navigation from './Navigation'

let array = []

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
        console.log(this.state.plants)
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
            stage: 'Pot',
            kind: 'Red',
            image: 'potred.png',
            user_id: params.id,
            shelf_id: 1
        }
        api.post('/plants', data)
            .catch(() => this.setState({ errorMsg: 'There was an error!' }))
        this.getPlants()
    }

    renderPlants = () => {
        if (this.state.plants.length) {
            return this.state.plants.map((plant) => (
                <div key={plant.id} className="plantPreview" >
                    <img className="plantImage" src={require(`../images/${plant.image}`)} />
                    <div className="previewBar">
                        <h2 className="previewStage">{plant.stage}</h2>
                    </div>
                </div>
            ))
        }
    }

    // plantsArray = () => {
    //     if (this.state.plants.length) {
    //         return plantsArray = this.state.plants.map((plant) => (
    //             <div key={plant.id} className="plantPreview" >
    //                 <img className="plantImage" src={require(`../images/${plant.image}`)} />
    //                 <div className="previewBar">
    //                     <h2 className="previewStage">{plant.stage}</h2>
    //                 </div>
    //             </div>
    //         ))
    //     }
    // }

    // plantsArray = () => {
    // const plantsArray = this.state.plants
    // function findPlant(plant) {
    //     return plant.shelf_id = spot
    // }
    // plantsArray.find(findPlant)
    // }

    // renderShelf = () => {
    //     let shelfSpots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    //     return shelfSpots.map((spot) => 
            
    //     (
    //         <div key={spot.id} className="spot" onClick={() => this.handleAdd()}>
    //             <img className="plantImage" src={require(`../images/potred.png`)} />
    //             {/* <img className="plantImage" src={require(`../images/${this.state.plants[spot]}`)} /> */}
    //             <div className="circle"></div>
    //         </div>
    //     ))
    // }

    render() {
        return (
            <div className="plants-container">
                <Navigation />
                <div className="plants">
                    <div className="shelves">{this.renderPlants()}</div>
                    {/* <div className="shelves">{this.renderShelf()}</div> */}
                    <div className="top">
                    <img className="plantImage" src={require(`../images/shelf/shelf1.png`)} />
                    <img className="plantImage" src={require(`../images/shelf/shelf2.png`)} />
                    <img className="plantImage" src={require(`../images/shelf/shelf3.png`)} />
                    <img className="plantImage" src={require(`../images/shelf/shelf4.png`)} />
                    </div>
                    <div className="middle">
                    <img className="plantImage" src={require(`../images/shelf/shelf5.png`)} />
                    <img className="plantImage" src={require(`../images/shelf/shelf6.png`)} />
                    <img className="plantImage" src={require(`../images/shelf/shelf7.png`)} />
                    <img className="plantImage" src={require(`../images/shelf/shelf8.png`)} />
                    </div>
                    <div className="bottom">
                    <img className="plantImage" src={require(`../images/shelf/shelf9.png`)} />
                    <img className="plantImage" src={require(`../images/shelf/shelf10.png`)} />
                    <img className="plantImage" src={require(`../images/shelf/shelf11.png`)} />
                    <img className="plantImage" src={require(`../images/shelf/shelf12.png`)} />
                    </div>
                    <h2>{this.state.name}'s Plants</h2>
                </div>
            </div>
        )
    }
}

export default Plants;