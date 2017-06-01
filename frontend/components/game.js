import React from 'react';
import Board from './board';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.setup();
    this.won = this.won.bind(this);
  }

  setup(){
    // win condition?
  }

  won(){
    // clearInterval(this.interval);
  }

  componentWillUpdate(){

  }

  componentDidUpdate(){
  }

  run(){
    this.interval = setInterval(board.step(), 1000);
  }

  render(){
    return (<Board />)
  }

}


export default Game;
