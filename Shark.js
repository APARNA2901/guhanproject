class Shark{
    constructor(y,width,height){
     var options={
      restition:0.8,
     } 
      this.body=Bodies.rectangle(windowWidth-100,y,width,height,options);
      this.width=width;
      this.y=y;
      this.height=height;
      
      World.add(world,this.body);
     
    }

    display(){
      this.body.position.x=this.body.position.x-3;
      
     imageMode(CENTER)
     image(this.image,windowWidth-100,this.y,this.width,this.height)
    }
}