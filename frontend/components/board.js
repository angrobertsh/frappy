import React from 'react';
import Bird from '../utils/bird';
import Pipe from '../utils/pipe';
import merge from 'lodash/merge';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: Array(8).fill().map(()=> Array(20).fill()),
      bird: new Bird({pos: [4,4], velocity: [0, -3]}),
      pipes: [],
      pipeInterval: 2
    }
    this.renderBoard = this.renderBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.setup = this.setup.bind(this);
  }

  componentDidMount(){
    this.setup();
  }

  setup(){
    let data = merge([], this.state.data);
    let rows = 0;
    while(rows < this.state.data.length){
      let cols = 0;
      while(cols < this.state.data[0].length){
        data[rows][cols] = "_nothing_";
        cols += 1;
      }
      rows += 1;
    }
    this.setState({data: data}, () => {
      this.insertNewPipes();
      this.updateBoard();
    })

    // set board state and bird and pipes
  }

  step(){
    this.state.bird.move();
    this.state.pipes.forEach((pipe) => {pipe.move()});
    insertNewPipes();
    updateBoard();
  }

  updateBoard(){
    let board = merge([], this.state.data);

    const birdPos = this.state.bird.pos
    board[birdPos[0]][birdPos[1]] = "bird!";

    this.state.pipes.forEach((pipe) => {
      pipe.positions.forEach((pos) => {
        // something else not pipe
        board[pos[0]][pos[1]] = "pipe!";
      })
    })

    this.setState({data: board});
    // this.props.updateBoard(board)
  }

  insertNewPipes(){
    // something based on this.props.interval
  }

  renderBoard(){
    return this.state.data.map((col, colNum) => (
      <div className="board-row" key={colNum}>
        { col.map((el, rowNum) => (
          <div className="board-tile" key={"row" + rowNum + "col" + colNum}>{ el }</div>
        )) }
      </div>
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
