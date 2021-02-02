class Box  {
  constructor(x, y, width, height){
    var options={
      isStatic:true 
      }
     
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/1.png");
    this.image1 = loadImage("sprites/2.png");
    this.image2 = loadImage("sprites/3.png");

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
imageMode(CENTER);
    fill("brown");
  image(this.image,370,19, this.width, this.height);
  }
    
 

 
  
//rand=Math.round(random(1,4));
/*if(frameCount % 80=== 0){
//thundercreatedframe=frameCount;

box1=createSprites(random(10,370),random(10,30),10,10);
switch(rand){


  case 1:box1.addimage(image1);
  break;
  case 2:box1.addIamge(image2);
  break;
  default:break;

}thunder.scale=random(0.3,0.6)
}pop()*/




  
}
