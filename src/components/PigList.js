import React, {Component} from 'react'
import Pig from './Pig'

export default class PigList extends Component {

  makePigURL = (singlePig) => {
    return (`/hog-imgs/${singlePig.name.toLowerCase().replace(/ /gi, "_")}.jpg`)
  }

  render(){
    return(
      <div>
        {this.props.pigs.map(singlePig =>
          <Pig
            pig={singlePig}
            key={singlePig.name}
            image={this.makePigURL(singlePig)}
            onClickPig={this.props.onClickPig}
            selectedHog={this.props.selectedHog}
          />
        )}
      </div>
    )
  }


}
