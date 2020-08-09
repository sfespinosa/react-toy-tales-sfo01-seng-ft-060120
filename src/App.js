import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: [],
    displayedToys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(json => this.setState({
      toys: json,
      displayedToys: json
    }))
  }

  addNewToy = e => {
    e.preventDefault()
    let [name, image] = e.target
        let newToy = {
      id: this.state.displayedToys.length + 1,
      name: name.value,
      image: image.value,
      likes: 0
    }
    let displayedToys = [...this.state.displayedToys, newToy]
    this.setState({ displayedToys })
  }

  donateToGoodwill = id => {
    let displayedToys = this.state.displayedToys.filter(toy => toy.id !== id)
    this.setState({ displayedToys })
  }

  likeToy = id => {
    let displayedToys = this.state.displayedToys.map(toy => {
      if (toy.id === id) {
        toy.likes += 1
      }
      return toy
    })
    this.setState({ displayedToys })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer displayedToys={this.state.displayedToys} donateToGoodwill={this.donateToGoodwill} likeToy={this.likeToy}/>
      </>
    );
  }

}

export default App;
