import Bird from './bird';
import Pipe from './pipe';
import merge from 'lodash/merge';

class Board extends React.Component{
  constructor(){
    this.board = []
    this.bird = new Bird({pos: [4,4], velocity: [0, -3]});
    this.pipes = [];
    this.pipeInterval = 2;
    this.setup = this.setup.bind(this);
    this.setup();
    this.renderBoard = this.renderBoard.bind(this);
  }

  setup(){
    // set board state and bird and pipes
  }

  step(){
    this.bird.move();
    this.pipes.forEach((pipe) => {pipe.move()});
    insertNewPipes();
    updateBoard();
  }

  updateBoard(){
    let board = merge({}, this.props.board);

    this.bird.positions.forEach((pos) => {
      // something else not bird
      this.props.board[[pos[0]], [pos[1]]] = "bird!";
    });
    this.pipes.forEach((pipe) => {
      pipe.positions.forEach((pos) => {
        // something else not pipe
        this.props.board[[pos[0]], [pos[1]]] = "pipe!";
      })
    })

    // this.props.updateBoard(board)
  }

  insertNewPipes(){
    // something based on this.interval
  }

  renderBoard(){
    return this.board.map((boardEl) => (
      <div className="board-tile">{ BoardEl }</div>
    ))
  }

  render(){
    return (
      <div id="board-container">
        { this.renderBoard() }
      </div>
    )
  }

}


export default Board;
