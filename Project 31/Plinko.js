class Plinko{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.r = 10;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        /*var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);*/
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}