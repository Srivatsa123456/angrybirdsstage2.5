class cons{
    
    constructor(bodya,bodyb)
    {
        var options={ bodyA:bodya, bodyB:bodyb, 
         stiffness:0.04, length:5 } 
        this.cons=Constraint.create(options)
        World.add(world,cons)
    }
    display(){
        var p1=this.cons.bodyA.position
        var p2=this.cons.bodyB.position
        line(p1.x,p1.y,p2.x,p2.y)
    }
}