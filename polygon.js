class Polygon{
    constructor(x,y,width,height){
       var options = {
       isStatic : true,
       restitution : 0.3,
       density : 10
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
this.image = loadImage("polygon.png")


}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    stroke("black");
    fill("white");
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();

}
}