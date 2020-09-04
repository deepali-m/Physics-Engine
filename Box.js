class Box{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }
    display()
    {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.width, this.height);
    }


}
