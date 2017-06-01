import React from 'react';
import Board from './board';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      won: false
    }
    this.won = this.won.bind(this);
    this.setup = this.setup.bind(this);
  }

  setup(){
    document.addEventListener('keypress', (e) => {
      if(e.keyCode === 32){
        this.board.state.bird.flap();
      }
    })
    // win condition?
  }

  won(){
    // clearInterval(this.interval);
  }

  componentDidMount(){
    this.setup();
  }

  componentWillUpdate(){

  }

  componentDidUpdate(){
  }

  run(){
    this.interval = setInterval(board.step(), 1000);
  }

  render(){
    return <Board ref={(board) => {this.board = board}} />
  }

}


export default Game;
