import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigList from './PigList'
import Options from './Options'

class App extends Component {

  constructor() {
    super()
    this.state = {
      pigs: [],
      newPigs: [],
      selectedHog: null,
      filter: false,
      type: ""
    }
  }

  showDetails = (hog) => {
   let selectedHog = this.state.selectedHog === hog ? null : hog
   this.setState({selectedHog})
  }

  componentDidMount = () => {
    this.setState(
      {
        pigs: hogs,
        newPigs: hogs
      }
    )
  }

  handleChangeType = (value) => {
    if (value === "name") {
      this.setState({
        newPigs: this.state.pigs.slice().sort((a,b) => a[value].localeCompare(b[value])),
        type: value
      })
    }
    else if (value === 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water') {
      this.setState({
        newPigs: this.state.pigs.slice().sort((a,b) => a[value]-(b[value])),
        type: value
      })
    }
    else if (value === "all"){
      this.setState({
        newPigs: this.state.pigs,
        type: "all"
      })
    }
  }

  handleFilterPigsClick = () => {
    if (this.state.filter === false) {
      this.setState({
        newPigs: this.state.newPigs.slice().filter(pig => pig.greased === true),
        filter: true
      })
    }
    else {
      this.setState({
        filter: false
      })
      this.handleChangeType(this.state.type) //Link the greased filter to the sort bar
    }
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Options onChangeType={this.handleChangeType} onFilterPigsClick={this.handleFilterPigsClick} filter={this.state.filter}/>
        <PigList pigs={this.state.newPigs} onClickPig={this.showDetails} selectedHog={this.state.selectedHog}/>
      </div>
    )
  }
}

export default App;
