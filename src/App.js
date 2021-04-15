import React, { Component }  from 'react';
import Header from './components/Header';
import PostFB from './components/PostFB';
import './App.css';

class App extends Component {  
  render() {
    return(
      <div className="app" id="app" >
        <Header />
        <PostFB />
      </div>
    );
  }
}


export default App;