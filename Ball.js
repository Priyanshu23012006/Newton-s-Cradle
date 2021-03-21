class Ball{
    constructor(x,y,s){
      var options={
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.8
      }
        
      this.x=x;
      this.y=y;
      this.s=s;
     this.body=Bodies.circle(this.x,this.y,(this.s)/2,options);
  
       World.add(world,this.body);
    }
  
    display(){
     
     var Ballpos=this.body.position;
  
      push()
      translate(Ballpos.x,Ballpos.y);
      rectMode(CENTER);
      fill(255,0,255);
     stroke("black");
     ellipse(0,0,this.s,this.s);
      pop();
    }
}