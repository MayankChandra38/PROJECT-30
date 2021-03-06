class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }
        this.pointB = pointB;
        this.ROPE = Constraint.create(options);
        World.add(world, this.ROPE);
    }
    fly() {
        this.ROPE.bodyA = null;
    }
    attach(body) {
        this.ROPE.bodyA = body;
    }
    display(){
        if(this.ROPE.bodyA) {
        var pointA = this.ROPE.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}