class Paper{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display()
    {   
        ellipseMode (RADIUS)
        fill ();
        circle(this.body.position.x,this.body.position.y,this.radius)
      }
}