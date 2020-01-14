import React, { Component } from 'react';
import axios from 'axios'
import "./styles/Hello.css"

class Plants extends Component {
  state = {
    plants: []
  }

  componentDidMount() {
    this.getPlants()
    console.log(this.state)
  }

  getPlants() {
    fetch('http://localhost:3000/plants')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return json
      })
      .then(json => {
        this.setState({ plants: json.plants });
        console.log(this.state.plants);
      })
      .catch(error => console.error(error))
  }

  async handleAdd() {
    let data = 
  {
    id: 3,
    stage: 'Fred',
    kind: 'Flintstone',
    image: 'test.png',
    user_id: 2
  }
    await axios.post('http://localhost:3000/plants', data)
    this.getPlants();
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
        <div>{this.renderShelf()}</div>
      </div>
    )
  }
}

export default Plants;