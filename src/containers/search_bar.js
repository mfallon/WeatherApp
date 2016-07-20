import React, { Component } from 'react';

export default class SearchBar extends Component {
  // setup state for this component
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    
    // take the existing funtion onInputChange, bind it to 'this' (SearchBar) and replace the onInputChange function
    // results in this having correct context to SearchBar
    this.onInputChange = this.onInputChange.bind(this);
    // so when you have a function that refers to 'this', i.e. this.setState, you should think about binding 'this' to the component class
  }

  // all DOM elements have an event property
  onInputChange(event) {
    // this has different context within here
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    // prevent form from submitting and refreshing browser
    event.preventDefault();

    // now go a fetch weather data with search term
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a forecast in your favorite cities"
          className="form-control"
          value={this.state.term} 
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
