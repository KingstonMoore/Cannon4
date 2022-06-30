class Boat {
    constructor(x, y, w, h) 
    {
      var options = {
        restitution: 0.2
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.image = loadImage("./assets/boat.png");
      World.add(world, this.body);
    }
  
    display() {
      push();
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
      pop();
    }
  }
  