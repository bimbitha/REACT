import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

class App extends React.Component {

  // The first method in React.
  constructor(props) {
    super(props)

  }

  // The Second method in React

   render() {
      return (
        <Counter></Counter>

      );
   }
   
}


export default App;
