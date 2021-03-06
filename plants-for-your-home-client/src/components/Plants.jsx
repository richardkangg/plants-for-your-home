import React, { Component } from 'react';
import "./styles/Plants.css"
import { api } from '../services/ApiConfig';
import DropNav from './DropNav'

let one = ''
let two = ''
let three
let four
let five
let six
let seven
let eight
let nine
let ten
let eleven
let twelve = ''

class Plants extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            user_id: '',
            plants: [],
            errorMsg: '',
            plantToAdd: {},
            plantToUpdate: {},
            plantToDelete: {},
            toDelete: false,
            toAdd: false,
            toUpdate: false,
            nav: false,
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
                user_id: info.data.user.id,
                errorMsg: '',
            })
            console.log(this.state.plants)
            console.log(this.state.user_id)
            console.log(this.state.plants[0].image)
            let array = this.state.plants[0].image
            console.log(`This is just state: ${array}`)
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

    createPlant = async (plantData) => {
        api.post('/plants', plantData)
            .catch(() => this.setState({ errorMsg: 'There was an error!' }))
        this.getPlants()
    }

    removePlant = async (plant_id) => {
        try {
            const resp = await api.delete(`/plants/${plant_id}`)
            return resp.data
        } catch (error) {
            throw error
        }
    }

    editPlant = async (plant_id, plantData) => {
        try {
            const resp = await api.put(`/plants/${plant_id}`, plantData)
            return resp
        } catch (error) {
            throw error
        }
    }

    handleOpenModal = (id) => {
        console.log('Clicked')
        console.log(id)
        const plant = this.state.plants.find(x => x.shelf_id === id);

        if (typeof plant === 'undefined') {
            console.log('This is undefined.')
            this.setState({ toAdd: true, plantToAdd: { shelf_id: id } })
        }
        else if (plant.stage === 'pot') {
            this.setState({ toUpdate: true, plantToUpdate: plant, toDelete: true, plantToDelete: { shelf_id: id } })
        }

        else if (plant.stage === 'seed') {
            this.setState({ toUpdate: true, plantToUpdate: plant, toDelete: true, plantToDelete: { shelf_id: id } })
        }

        else if (plant.stage === 'grow') {
            this.setState({ toUpdate: true, plantToUpdate: plant, toDelete: true, plantToDelete: { shelf_id: id } })
        }

        else if (plant.stage === 'single') {
            this.setState({ toUpdate: true, plantToUpdate: plant, toDelete: true, plantToDelete: { shelf_id: id } })
        }

        else if (plant.stage === 'full') {
            this.setState({ toUpdate: true, plantToUpdate: plant, toDelete: true, plantToDelete: { shelf_id: id } })
        }

    }

    handleCloseModal = () => this.setState({ toDelete: false, plantToDelete: {}, toUpdate: false, plantToUpdate: {}, toAdd: false, plantToAdd: {} })

    handleDeletePlant = () => {
        const plant = this.state.plants.find(x => x.shelf_id === this.state.plantToDelete.shelf_id);
        this.removePlant(plant.id)
            .then(() => {
                this.getPlants()
            })
            .then(() => this.handleCloseModal())
            .catch(err => console.error(err))
    }

    handleSeedPlant = (type, img) => {
        let plantData = {
            id: this.state.plantToUpdate.id,
            stage: 'seed',
            kind: type,
            image: img,
            user_id: this.state.plantToUpdate.user_id,
            shelf_id: this.state.plantToUpdate.shelf_id
        }
        console.log(plantData)
        console.log(plantData.shelf_id)
        this.editPlant(plantData.id, plantData)
            .then(() => {
                this.getPlants()
            })
            .then(() => this.handleCloseModal())
            .catch(err => console.error(err))
    }

    handleGrowPlant = (type, img) => {
        let plantData = {
            id: this.state.plantToUpdate.id,
            stage: 'grow',
            kind: type,
            image: img,
            user_id: this.state.plantToUpdate.user_id,
            shelf_id: this.state.plantToUpdate.shelf_id
        }
        console.log(plantData)
        console.log(plantData.shelf_id)
        this.editPlant(plantData.id, plantData)
            .then(() => {
                this.getPlants()
            })
            .then(() => this.handleCloseModal())
            .catch(err => console.error(err))
    }

    handleFullPlant = (img, full) => {
        let plantData = {
            id: this.state.plantToUpdate.id,
            stage: full,
            kind: this.state.plantToUpdate.kind,
            image: img,
            user_id: this.state.plantToUpdate.user_id,
            shelf_id: this.state.plantToUpdate.shelf_id
        }
        console.log(plantData)
        console.log(plantData.shelf_id)
        this.editPlant(plantData.id, plantData)
            .then(() => {
                this.getPlants()
            })
            .then(() => this.handleCloseModal())
            .catch(err => console.error(err))
    }

    handleMoreDaisies = (img, full) => {
        let plantData = {
            id: this.state.plantToUpdate.id,
            stage: full,
            kind: this.state.plantToUpdate.kind,
            image: img,
            user_id: this.state.plantToUpdate.user_id,
            shelf_id: this.state.plantToUpdate.shelf_id
        }
        console.log(plantData)
        console.log(plantData.shelf_id)
        this.editPlant(plantData.id, plantData)
            .then(() => {
                this.getPlants()
            })
            .then(() => this.handleCloseModal())
            .catch(err => console.error(err))
    }

    handleAddPlant = (color, img) => {
        let plantData = {
            "stage": 'pot',
            "kind": color,
            "image": img,
            "user_id": this.state.user_id,
            "shelf_id": this.state.plantToAdd.shelf_id
        }
        console.log(plantData)
        console.log(plantData.shelf_id)
        this.createPlant(plantData)
            .then(() => {
                this.getPlants()
            })
            .then(() => this.handleCloseModal())
            .catch(err => console.error(err))
    }



    renderDeleteConfirmModal = () => {
        if (this.state.toUpdate) {

            if (this.state.plantToUpdate.stage === 'pot' && this.state.plantToUpdate.kind === 'red') {
                return (
                    <div className="modal open">
                        <h4>Add a seed!</h4>
                        <div className="buttons">
                            <div className="icons">
                            <img src={require('../images/seedbrown.png')} alt="daisy seed" onClick={() => this.handleSeedPlant('daisy', 'redbrown.png')} />
                            <img src={require('../images/seedblue.png')} alt="grass seed" onClick={() => this.handleSeedPlant('grass', 'redblue.png')} />
                            </div>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            if (this.state.plantToUpdate.stage === 'pot' && this.state.plantToUpdate.kind === 'brown') {
                return (
                    <div className="modal open">
                        <h4>Add a seed!</h4>
                        <div className="buttons">
                            <div className="icons">
                            <img src={require('../images/seedbrown.png')} alt="daisy seed" onClick={() => this.handleSeedPlant('daisy', 'brownbrown.png')} />
                            <img src={require('../images/seedblue.png')} alt="grass seed" onClick={() => this.handleSeedPlant('grass', 'brownblue.png')} />
                            </div>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            if (this.state.plantToUpdate.stage === 'pot' && this.state.plantToUpdate.kind === 'gray') {
                return (
                    <div className="modal open">
                        <h4>Add a seed!</h4>
                        <div className="buttons">
                            <div className="icons">
                            <img src={require('../images/seedbrown.png')} alt="daisy seed" onClick={() => this.handleSeedPlant('daisy', 'graybrown.png')} />
                            <img src={require('../images/seedblue.png')} alt="grass seed" onClick={() => this.handleSeedPlant('grass', 'grayblue.png')} />
                            </div>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'seed' && this.state.plantToUpdate.image === 'redbrown.png') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleGrowPlant('red_daisy', 'redgrowth.png')}>
                                Water your seed!
                            </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'seed' && this.state.plantToUpdate.image === 'redblue.png') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleGrowPlant('red_grass', 'redgrowth.png')}>
                                Water your seed!
                            </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'seed' && this.state.plantToUpdate.image === 'brownbrown.png') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleGrowPlant('brown_daisy', 'browngrowth.png')}>
                                Water your seed!
                            </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'seed' && this.state.plantToUpdate.image === 'brownblue.png') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleGrowPlant('brown_grass', 'browngrowth.png')}>
                                Water your seed!
                            </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'seed' && this.state.plantToUpdate.image === 'graybrown.png') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleGrowPlant('gray_daisy', 'graygrowth.png')}>
                                Water your seed!
                            </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'seed' && this.state.plantToUpdate.image === 'grayblue.png') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleGrowPlant('gray_blue', 'graygrowth.png')}>
                                Water your seed!
                            </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }


            else if (this.state.plantToUpdate.stage === 'grow' && this.state.plantToUpdate.kind === 'red_daisy') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleFullPlant('reddaisy.png', 'single')}>
                                Water your plant!
                        </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'grow' && this.state.plantToUpdate.kind === 'red_grass') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleFullPlant('redgrass.png')}>
                                Water your plant!
                        </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'grow' && this.state.plantToUpdate.kind === 'brown_daisy') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleFullPlant('browndaisy.png', 'single')}>
                                Water your plant!
                        </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'grow' && this.state.plantToUpdate.kind === 'brown_grass') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleFullPlant('browngrass.png')}>
                                Water your plant!
                        </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'grow' && this.state.plantToUpdate.kind === 'gray_daisy') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleFullPlant('graydaisy.png', 'single')}>
                                Water your plant!
                        </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'grow' && this.state.plantToUpdate.kind === 'gray_grass') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleFullPlant('graygrass.png')}>
                                Water your plant!
                        </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'single' && this.state.plantToUpdate.kind === 'red_daisy') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleMoreDaisies('reddaisies.png', 'full')}>
                                Water your plant some more!
                        </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'single' && this.state.plantToUpdate.kind === 'brown_daisy') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleMoreDaisies('browndaisies.png', 'full')}>
                                Water your plant some more!
                        </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'single' && this.state.plantToUpdate.kind === 'gray_daisy') {
                return (
                    <div className="modal open">
                        <h4>What do you want to do?</h4>
                        <div className="buttons">
                            <button onClick={() => this.handleMoreDaisies('graydaisies.png', 'full')}>
                                Water your plant some more!
                        </button>
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }

            else if (this.state.plantToUpdate.stage === 'full') {
                return (
                    <div className="modal open">
                        <h4>Delete your plant?</h4>
                        <div className="buttons">
                            <button
                                color="danger"
                                title="Delete"
                                onClick={this.handleDeletePlant}
                            >Delete</button>
                            <button
                                onClick={this.handleCloseModal}
                            >Cancel</button>
                        </div>
                    </div>
                )
            }
        }

        else if (this.state.toAdd) {
            console.log('Add modal is open.')
            return (
                <div className="modal open">
                    <h4>Add a pot!</h4>
                    <div className="buttons">
                    <div className="icons">
                            <img src={require('../images/potred.png')} alt="red pot" onClick={() => this.handleAddPlant('red', 'potred.png')} />
                            <img src={require('../images/potbrown.png')} alt="blue pot" onClick={() => this.handleAddPlant('brown', 'potbrown.png')} />
                            <img src={require('../images/potgray.png')} alt="gray pot" onClick={() => this.handleAddPlant('gray', 'potgray.png')} />
                            </div>
                        <button
                            onClick={this.handleCloseModal}
                        >Cancel</button>
                    </div>
                </div>
            )

        }

        else {
            return <div className="modal close" />
        }
    }

    toggleNav = () => {
        if (this.state.nav) {
        this.setState({ nav: false, toAdd: false, toDelete: false, toUpdate: false })
        } else {this.setState({nav: true, toAdd: false, toUpdate: false, toDelete: false })}
    }

    renderNavBar = () => {
        if (this.state.nav) {
            return (
                <div className="navBar">
                <DropNav />
                </div>
                )
        }

        else {
            return <div className="modal close" />
        }
    }

    renderInstructions = () => {
        if (this.state.nav || this.state.toAdd || this.state.toUpdate || this.state.toDelete) {
            return (
                <div className="modal close">
                </div>
                )
        }

        else {
            return <div className="instructions">
                <h3>Click on an empty shelf space or a pot to make changes to your plants!</h3>
                </div>
        }
    }

    renderPlantOne = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 1);
        if (typeof plant === 'undefined') {
            return one = require(`../images/blank.png`)
        }
        else { return one = require(`../images/${plant.image}`) }
    }

    renderPlantTwo = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 2);
        if (typeof plant === 'undefined') {
            return two = require(`../images/blank.png`)
        }
        else { return two = require(`../images/${plant.image}`) }
    }

    renderPlantThree = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 3);
        if (typeof plant === 'undefined') {
            return three = require(`../images/blank.png`)
        }
        else { return three = require(`../images/${plant.image}`) }
    }

    renderPlantFour = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 4);
        if (typeof plant === 'undefined') {
            return four = require(`../images/blank.png`)
        }
        else { return four = require(`../images/${plant.image}`) }
    }

    renderPlantFive = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 5);
        if (typeof plant === 'undefined') {
            return five = require(`../images/blank.png`)
        }
        else { return five = require(`../images/${plant.image}`) }
    }

    renderPlantSix = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 6);
        if (typeof plant === 'undefined') {
            return six = require(`../images/blank.png`)
        }
        else { return six = require(`../images/${plant.image}`) }
    }

    renderPlantSeven = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 7);
        if (typeof plant === 'undefined') {
            return seven = require(`../images/blank.png`)
        }
        else { return seven = require(`../images/${plant.image}`) }
    }

    renderPlantEight = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 8);
        if (typeof plant === 'undefined') {
            return eight = require(`../images/blank.png`)
        }
        else { return eight = require(`../images/${plant.image}`) }
    }

    renderPlantNine = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 9);
        if (typeof plant === 'undefined') {
            return nine = require(`../images/blank.png`)
        }
        else { return nine = require(`../images/${plant.image}`) }
    }

    renderPlantTen = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 10);
        if (typeof plant === 'undefined') {
            return ten = require(`../images/blank.png`)
        }
        else { return ten = require(`../images/${plant.image}`) }
    }

    renderPlantEleven = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 11);
        if (typeof plant === 'undefined') {
            return eleven = require(`../images/blank.png`)
        }
        else { return eleven = require(`../images/${plant.image}`) }
    }

    renderPlantTwelve = () => {
        const plant = this.state.plants.find(x => x.shelf_id === 12);
        if (typeof plant === 'undefined') {
            return twelve = require(`../images/blank.png`)
        }
        else { return twelve = require(`../images/${plant.image}`) }
    }

    render() {
        this.renderPlantOne();
        this.renderPlantTwo();
        this.renderPlantThree();
        this.renderPlantFour();
        this.renderPlantFive();
        this.renderPlantSix();
        this.renderPlantSeven();
        this.renderPlantEight();
        this.renderPlantNine();
        this.renderPlantTen();
        this.renderPlantEleven();
        this.renderPlantTwelve();

        return (
            <div className="plants-container">
                <div className="sideBar">
                    <a href="/"><h1>PLANTS FOR YOUR HOME</h1></a>
                {this.renderNavBar()}
                <img className="x" src={require('../images/menubar.png')} onClick={() => this.toggleNav()} />
                {this.renderDeleteConfirmModal()}
                {this.renderInstructions()}
                </div>
                <div className="plants">
                    <div className="top">
                        <div className="each" onClick={() => this.handleOpenModal(1)}>
                            <img className="plant" alt="plant1" src={one} onClick={() => this.handleOpenModal(1)} />
                            <img className="plantImage" alt="shelf1" src={require(`../images/shelf/shelf1.png`)} />
                        </div>
                        <div className="each" onClick={() => this.handleOpenModal(2)}>
                            <img className="plant" alt="plant2" src={two} onClick={() => this.handleOpenModal(2)} />
                            <img className="plantImage" alt="shelf2" src={require(`../images/shelf/shelf2.png`)} />
                        </div>
                        <div className="each" onClick={() => this.handleOpenModal(3)}>
                            <img className="plant" alt="plant3" src={three} onClick={() => this.handleOpenModal(3)} />
                            <img className="plantImage" alt="shelf3" src={require(`../images/shelf/shelf3.png`)} />
                        </div>
                        <div className="each" onClick={() => this.handleOpenModal(4)}>
                            <img className="plant" alt="plant4" src={four} onClick={() => this.handleOpenModal(4)} />
                            <img className="plantImage" alt="shelf4" src={require(`../images/shelf/shelf4.png`)} />
                        </div>
                    </div>
                    <div className="middle">
                        <div className="each" onClick={() => this.handleOpenModal(5)}>
                            <img className="plant" alt="plant5" src={five} />
                            <img className="plantImage" alt="shelf5" src={require(`../images/shelf/shelf5.png`)} />
                        </div>
                        <div className="each" onClick={() => this.handleOpenModal(6)}>
                            <img className="plant" alt="plant6" src={six} />
                            <img className="plantImage" alt="shelf6" src={require(`../images/shelf/shelf6.png`)} />
                        </div>
                        <div className="each" onClick={() => this.handleOpenModal(7)}>
                            <img className="plant" alt="plant7" src={seven} />
                            <img className="plantImage" alt="shelf7" src={require(`../images/shelf/shelf7.png`)} />
                        </div>
                        <div className="each" onClick={() => this.handleOpenModal(8)}>
                            <img className="plant" alt="plant8" src={eight} />
                            <img className="plantImage" alt="shelf8" src={require(`../images/shelf/shelf8.png`)} />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="each" onClick={() => this.handleOpenModal(9)}>
                            <img className="plant" alt="plant9" src={nine} />
                            <img className="plantImage" alt="shelf9" src={require(`../images/shelf/shelf9.png`)} />
                        </div>
                        <div className="each" onClick={() => this.handleOpenModal(10)}>
                            <img className="plant" alt="plant10" src={ten} />
                            <img className="plantImage" alt="shelf10" src={require(`../images/shelf/shelf10.png`)} />
                        </div>
                        <div className="each" onClick={() => this.handleOpenModal(11)}>
                            <img className="plant" alt="plant11" src={eleven} />
                            <img className="plantImage" alt="shelf11" src={require(`../images/shelf/shelf11.png`)} />
                        </div>
                        <div className="each" onClick={() => this.handleOpenModal(12)}>
                            <img className="plant" alt="plant12" src={twelve} />
                            <img className="plantImage" alt="shelf12" src={require(`../images/shelf/shelf12.png`)} />
                        </div>
                    </div>
                    <h2>{this.state.name}'s Plants</h2>
                </div>
            </div>
        )
    }
}

export default Plants;