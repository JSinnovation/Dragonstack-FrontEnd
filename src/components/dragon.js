import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { fetchDragon } from '../actions/dragon';
import fetchStates from '../reducers/fetchStates';
/* const DEFAULT_DRAGON = {
  dragonId:'',
  generationId:'',
  nickname:'',
  birthdate:'',
  traits: []
}; */

class Dragon extends Component {
  get DragonView() {
    const { dragon } = this.props;
    if (dragon.status === fetchStates.error) return <span>{dragon.message}</span>;
    
    // return <DragonAvatar dragon={this.props.dragon} /> ;
    return <DragonAvatar dragon={dragon} />;
  }
  
 // state = {dragon: DEFAULT_DRAGON};

  /* componentDidMount() {
    this.fetchDragon();
  } */

/* 
  fetchDragon = () => {
    fetch('http://localhost:3003/dragon/new')
      .then(response => response.json())
      .then(json => this.setState({ dragon: json.dragon }))
      .catch(error => console.error('error', error));
  }
 */
  render() {
    return (
      <div>
        <Button onClick={this.props.fetchDragon}>New Dragon</Button>
        {this.DragonView}
   {/*     <DragonAvatar dragon={this.props.dragon} /> */}
        
      </div>
      
    )
  }
}

export default connect(
  ({dragon}) => ({dragon}),
  {fetchDragon}
)(Dragon);

//connect function itself returns a function so we need a double parenthesis
//mapstate to props, mapdispatch to props