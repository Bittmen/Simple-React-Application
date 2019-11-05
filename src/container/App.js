import React, { Component } from 'react';
import './App.css';

import Header from '../components/shared/header';
import Profile from '../components/profile';
import Projects from '../components/projects';
import Footer from '../components/shared/footer';

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
