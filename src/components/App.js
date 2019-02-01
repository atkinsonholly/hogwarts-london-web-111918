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
      pigs: hogs,
      selectedHog: null,
      filters: false,
      type: "all"
    }
  }

  showDetails = (hog) => {
   let selectedHog = this.state.selectedHog === hog ? null : hog
   this.setState({selectedHog})
  }

  sortAndFilterPigs = () => {
    let newPigs = [...this.state.pigs]
    const weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const nameKey = 'name'
    console.log(this.state.filters)
    console.log(this.state.type)
    if (this.state.filters === true) {
      newPigs = newPigs.filter(pig => pig.greased === true)
    }
    if (this.state.type === nameKey) {
      newPigs = newPigs.sort((a,b) => a[nameKey].localeCompare(b[nameKey]))
    }
    else if (this.state.type === weightKey) {
      newPigs = newPigs.sort((a,b) => a[weightKey]-(b[weightKey]))
    }
    return newPigs
  }

  handleChangeFilter = () => {
    //console.log(this.state.filters)
    this.setState({
      filters: !this.state.filters
    })
    //console.log(this.state.filters)
  }

  handleChangeType = (value) => {
    if (value === 'all') {
      this.setState({
        type: value,
        filters: false
      })
    }
    else {
      this.setState({
        type: value
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Options onChangeType={this.handleChangeType} onChangeFilter={this.handleChangeFilter} filters={this.state.filters} type={this.state.type} />
        <PigList pigs={this.sortAndFilterPigs()} onClickPig={this.showDetails} selectedHog={this.state.selectedHog}/>
      </div>
    )
  }

}

export default App;
