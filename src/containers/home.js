import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import {getCountries} from '../actions/index';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBirthplace: '',
      selectedCurrency: '',
      selectedOrder: '',
      searchText: ''
    }
  }
  
  componentDidMount() {
    this.props.dispatch(getCountries());
  }
  
  renderCountryList(item) {
    return (
      <option key={item} value={item}>{item}</option>
    )
  }
  
  handleChange(e) {
    const newValue = e.target.value;
    const key = e.target.id;
    this.setState({...this.state, [key]: newValue});
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <div className="title text-center">
            <h1>Vodafone Technical Test</h1>
            <h2>Celebrity Rich List</h2>
          </div>
          <form>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <FormGroup controlId="selectedBirthplace">
                  <ControlLabel>Birthplace:</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="all"
                    onChange={this.handleChange.bind(this)}
                  >
                    <option value="all">Show all</option>
                    {this.props.countryList.map(this.renderCountryList)}
                  </FormControl>
                </FormGroup>
              </div>
              <div className="col-xs-12 col-md-6">
                <FormGroup controlId="selectedCurrency">
                  <ControlLabel>Currency Converter:</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="usd"
                    onChange={this.handleChange.bind(this)}
                  >
                    <option value="usd">US Dollar</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <FormGroup controlId="searchText">
                  <ControlLabel>Search:</ControlLabel>
                  <FormControl type="text" placeholder="Search" onChange={this.handleChange.bind(this)} />
                </FormGroup>
              </div>
              <div className="col-xs-12 col-md-6">
                <FormGroup controlId="selectedOrder">
                  <ControlLabel>Order by:</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="rank"
                    onChange={this.handleChange.bind(this)}
                  >
                    <option value="rank">Rank</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    countryList: state.data.countryList
  }
}

export default connect(mapStateToProps, null)(Home);