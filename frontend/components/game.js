import Board from './board';

class Game extends React.Component{
  constructor(){
    this.board = new Board();
    this.setup();
  }

  setup(){
    // win condition?
  }

  run(){
    board.step();
  }

  render(){
    return (<Board board={this.props.board} updateBoard={this.props.updateBoard}/>)
  }

}


export default Game;
