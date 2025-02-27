import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import CatList from './CatList';
import { fetchCats } from './actions/catActions';

class App extends Component {   
  componentDidMount(){
    this.props.fetchCats()
  }
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.pictures}></CatList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('yoyo');
  return {
    pictures: state.cats && state.cats.pictures
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats()) 
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

