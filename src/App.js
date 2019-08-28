import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from "./components/ChartTypes/Bar";

class App extends React.Component{
  componentDidMount(){
    BarChart()
  }
  componentDidUpdate() {
    BarChart()
  }
  render(){
    return (
      <div className="App">
        <div id="canvas"></div>
      </div>
    );
  }
}

export default App;
