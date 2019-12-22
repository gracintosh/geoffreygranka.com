function Ball(){
    this.pos = createVector(width/2,height/2);
    this.r = 10;
    this.maxSpd = createVector(10,15);
    
    do{
        this.acc = p5.Vector.random2D();
        this.acc.setMag(random(4, 6));
    }while(abs(this.acc.x)<3 || abs(this.acc.y)<3);
    
    this.show = function(){
        noStroke();
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r*2);
    }
    
    this.update = function(){
        this.pos.add(this.acc);
        
        if(this.pos.y<this.r || this.pos.y>height-this.r){
            this.acc.y*=-1;
        }
        
    }
}