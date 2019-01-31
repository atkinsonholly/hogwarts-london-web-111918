import React, { Component } from 'react';

export default class Options extends Component {
//Sort functionality and filter functionality together in this component
//Button allows user to search greased pigs (toggle on/off)
//Search bar allows data to be automatically filtered by name or weight
  render() {
    return (
      <div>
        <div className="ui form">
            <h3>Sort By:</h3>
            <div className="field">
                <select name="type" id="type" onChange={(event) => this.props.onChangeType(event.target.value)}>
                    <option value="all">All</option>
                    <option value="name">Name</option>
                    <option value='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'>Weight</option>
                </select>
            </div>
            <div className="field">
                <button
                  className="ui secondary button"
                  onClick={this.props.onFilterPigsClick}
                >
                  {this.props.filter === false ? `Find Greased Pigs!` : `Show All Piggies!`}
                </button>
            </div>
        </div>
    </div>
    )
  }
}
