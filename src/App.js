import React from 'react';
import Clock from './components/Clock';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }

  render(){
    return(
      <div className='App-header'>
        <Clock></Clock>
      </div>
    )
  }
}

export default App;
