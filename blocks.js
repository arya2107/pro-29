class Blocks {
    constructor(x,y) {
      var options = {
          restitution:0.1
      }
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      angleMode(RADIANS);
      rotate(angle);
      rectMode(CENTER);
      
      rect(0, 0, this.width, this.height);
      pop();
    }
  };