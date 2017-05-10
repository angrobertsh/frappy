import MovingObject from './moving_object';

class Bird extends MovingObject{
  constructor(options){
    super(options);
    this.pos = options.pos;
    this.velocity = options.velocity;
  }

  collideWith(otherObject){
    if(collision(otherObject, this)){
      // you lose, reset
    }
  }

  collision(obj1, obj2){
    let pos1Arr = obj1.positions;
    let pos2Arr = obj2.positions;

    for(i = 0; i < pos1Arr.length; i++){
      for(j = 0; j < pos2Arr.length; j++){
        if((pos1Arr[i][0] === pos2Arr[j][0]) && (pos1Arr[i][1] === pos2Arr[j][1])){
          return true;
        }
      }
    }

    return false;
  }

}

export default Bird;
