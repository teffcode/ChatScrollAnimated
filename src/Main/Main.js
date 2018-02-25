import React, { Component } from 'react';

import CardOne from '../CardOne/CardOne';
import CardTwo from '../CardTwo/CardTwo';
import Input from '../Input/Input';

import './Main.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      one: 'hidden',
      two: 'hidden',
      onee: 'hidden',
      twoo: 'hidden',
      topOne1: 'hidden',
      topOne2: 'hidden',
      topTwo1: 'hidden',
      topTwo2: 'hidden',
      input: 'hidden'
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
  }

  handleAnimation = () => {
    if(document.documentElement.scrollTop > 50){
      this.setState({
        one: 'cardOne',
        topOne1: 'topOne1'
      });
    }

    if(document.documentElement.scrollTop > 100){
      this.setState({
        two: 'cardTwo' ,
        topTwo1: 'topTwo1'
      });
    }

    if(document.documentElement.scrollTop > 150){
      this.setState({
        onee: 'cardOne',
        topOne2: 'topOne2'
      });
    }

    if(document.documentElement.scrollTop > 200){
      this.setState({
        twoo: 'cardTwo',
        topTwo2: 'topTwo2'        
      });
    }

    if(document.documentElement.scrollTop > 250){
      this.setState({
        input: 'inputt'       
      });
    }
  };

  render() {
    return (
      <div>
        <h1>February, 2018</h1>
        <div  className="main"/>
        <CardOne classCard={this.state.one} classTop={this.state.topOne1} text='Are we meeting today?'/>
        <CardTwo classCard={this.state.two} classTop={this.state.topTwo1} text='Yes, What time suits you?'/>
        <CardOne classCard={this.state.onee} classTop={this.state.topOne2} text='I was thinking after lunch'/>
        <CardTwo classCard={this.state.twoo} classTop={this.state.topTwo2} text='That is Perfect!'/>
        <Input classInput={this.state.input}/>
      </div>
    );
  }
}

export default App;
