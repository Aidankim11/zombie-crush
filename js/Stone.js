class Stone {
    constructor(x, y, r) {
        var options = {
            restitution:0.5
        };
        this.r = r
        this.body = Bodies.rectangle(x, y, this.r,  this.r,options);
        World.add(world, this.body);
        this.image=loadImage("assets/stone.png")
      }
      display() {
        var pos = this.body.position;
        push();
        fill("gray");
       imageMode(CENTER)
        image(this.image,pos.x, pos.y, this.r,this.r);
        pop();
      }
    }