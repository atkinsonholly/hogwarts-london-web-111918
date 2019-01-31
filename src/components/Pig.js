import React, {Component} from 'react'

export default class Pig extends Component {

  render(){
    return(
      <div className="pigTile" onClick={() => this.props.onClickPig(this.props.pig)}>
        <h3>
          {this.props.pig.name}
        </h3>
        <img src={this.props.image} alt={this.props.image}/>
        <div className="pigDetails">
        {this.props.selectedHog !== this.props.pig ? <p></p> :
          <div>
            <p>{this.props.pig.specialty}</p>
            <p>{this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p>{this.props.pig['highest medal achieved']}</p>
          </div>
        }
        </div>
      </div>
    )
  }


}
