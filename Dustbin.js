class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
            this.width=width;
            this.height=height;
            World.add(world,this.body);

        }
        display(){
            push();
            loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/dustbingreen.png")
            rectMode(CENTER);
            rect(this.body.position.x, this.body.position.y,this.width, this.height);
            pop();

        }
    
}