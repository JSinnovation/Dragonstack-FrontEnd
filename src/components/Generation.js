import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generationActionCreator } from '../actions/generation';

const MINIMUM_DELAY = 3000;

class Generation extends Component {
  timer = null; //object that has not been set yet

  componentDidMount() {
    this.fetchNextGeneration();
  }
  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  /* fetchGeneration = () => {
    fetch('http://localhost:3003/generation')
      .then(response => response.json())
        .then(json => {
            this.props.dispatchGeneration(json.generation);
        
      })
      .catch(error => console.error('error', error));
  }; */

  fetchNextGeneration = () => {
    this.props.fetchGeneration();

    let delay =
      new Date(this.props.generation.expiration).getTime() -
      new Date().getTime();

    if (delay < MINIMUM_DELAY) {
      delay = MINIMUM_DELAY;
    }

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  };

  render() {
    console.log('this.props', this.props);
    const { generation } = this.props;

    return (
      <div>
        {' '}
        <h3> Generation {generation.generationId}.Expires on : </h3>{' '}
        <h4> {new Date(generation.expiration).toString()} </h4>{' '}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const generation = state.generation;

  return { generation };
};

/* const mapDispatchToProps = dispatch => {
    return {
        fetchGeneration: () => fetchGeneration(dispatch)
    }
}; */
//The first arrow function is responsible for the mapping of dispatch to props and the second arrow function is responsible for passing the dispatch from the redux store
//the dispatch function
const fetchGeneration = ()=> dispatch => {
    return fetch('http://localhost:3003/generation')
        .then(response => response.json())
        .then(json => {
            dispatch(generationActionCreator(json.generation))
        })
        .catch(error => console.error('error',error));
};




const componentConnector = connect(
    mapStateToProps,
    { fetchGeneration} //was mapDispatchToProps
);

export default componentConnector(Generation);
//takes entire component class as its argument above, wraps around it
