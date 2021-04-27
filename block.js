class Block{
    constructor(x,y,width,height,options){
       var options = {
       isStatic : false,
       restitution : 1
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);


}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    stroke("black");
    fill("white");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();

}
}