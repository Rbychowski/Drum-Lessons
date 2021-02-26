import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { LESSONS } from './shared/lessons';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: LESSONS
        };
    }
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Drum Lessons</NavbarBrand>
              </div>
              </Navbar>
              <Directory lessons={this.state.lessons} />
          </div>
      );
  }
}



export default App;
