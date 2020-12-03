class line{
    constructor(x,y,width,height){
        var options={
            'isStatic':true
        }
        this.body=Bodies(x,y,width,heigth,options);
        this.width=width;
        this.heigth=heigth;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
