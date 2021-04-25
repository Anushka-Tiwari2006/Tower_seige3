class Box{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 1,
          friction : 0.1,
          isStatic : false,
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow.png");
        World.add(world, this.body);
        


        
      }
      display(){
        if(this.body.speed<4){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0, 0, this.width+50, this.height+40);
          pop();


        }
        else{
          World.remove(world,this.body)
          push();
          this.visibility = this.visibility-5;
          pop();


        }
        
      }
}
