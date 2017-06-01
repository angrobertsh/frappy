import MovingObject from './moving_object';

class Pipe extends MovingObject{
  constructor(options){
    super(options);
    this.length = options.length;
    this.direction = options.direction;
    this.positions = [];
  }

}

export default Pipe;
