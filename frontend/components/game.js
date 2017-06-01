import React from 'react';
import Board from './board';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: <Board />
    }
    this.won = this.won.bind(this);
    this.setup = this.setup.bind(this);
  }

  setup(){
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
    return <div> {this.state.board} </div>
  }

}


export default Game;
