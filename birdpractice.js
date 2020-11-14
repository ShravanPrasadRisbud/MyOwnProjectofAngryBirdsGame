class Birdpractice extends BaseClass {
    constructor(x, y){
        super(x, y, 50, 50);
        this.image = loadImage("sprites/bird.png");
    }

    display() {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}

class Birdpractice2 extends BaseClass {
    constructor(x, y){
        super(x, y, 50, 50);
        this.image = loadimage("sprites/bird.png");
    }

    display() {
        this.body.position.x = mouse.x;
        this.body.position.y = mouse.y;
        super.display();
    }
}
