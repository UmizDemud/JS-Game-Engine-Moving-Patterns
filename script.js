/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');

const CANVAS_WIDTH = canvas.width = canvas2.width = canvas3.width = canvas4.width = 500;
const CANVAS_HEIGHT = canvas.height = canvas2.height = canvas3.height = canvas4.height = 1000;
const numberOfEnemies = 10;
const enemies = [
    [], [], [], []
]

let gameFrame = 0;

class Enemy1 {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy1.png'
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
//        this.speed = Math.random() * 4 - 2;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update() {
        this.x += Math.random() * 10 - 5;
        this.y += Math.random() * 10 - 5;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx.drawImage(this.image,
            this.frame * this.spriteWidth,
            0, 
            this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height);
    }
}

class Enemy2 {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy2.png'
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 + 1;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.sinH = Math.random() * 10;
        this.angleSpeed = Math.random() * 0.2
    }
    update() {
        this.x -= this.speed;
        this.y += this.sinH * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas.width;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx2.drawImage(this.image,
            this.frame * this.spriteWidth,
            0, 
            this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height);
    }
}

class Enemy3 {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy3.png'
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 + 1;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * .3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * .8 + 0.5
    }
    update() {
        this.x = canvas.width / 3 * Math.sin(this.angle * Math.PI / 90) + canvas.width / 2 - this.width / 2;
        this.y = canvas.height / 2.5 * Math.cos(this.angle * Math.PI / 180) + canvas.height / 2 - this.width / 2;
        // this.y += this.sinH * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas.width;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx3.drawImage(this.image,
            this.frame * this.spriteWidth,
            0, 
            this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height);
    }
}

class Enemy4 {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy4.png'
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.newX = Math.random() * (canvas.width - this.width);
        this.newY = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 + 1;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * .3 + 1);
        this.interval = Math.floor(Math.random() * 200 + 50);
    }
    update() {
        if (gameFrame % this.interval === 0) {
            this.newX = Math.random() * (canvas.width - this.width);
            this.newY = Math.random() * (canvas.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/20;
        this.y -= dy/20;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas.width;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx4.drawImage(this.image,
            this.frame * this.spriteWidth,
            0, 
            this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height);
    }
}

for (let i = 0; i < numberOfEnemies; i++) {
    enemies[0].push(new Enemy1);
    enemies[1].push(new Enemy2);
    enemies[2].push(new Enemy3);
    enemies[3].push(new Enemy4);
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx2.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx3.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx4.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    enemies.forEach(enemyArray => {
        enemyArray.forEach(enemy => {
            enemy.update();
            enemy.draw();
        })
    })
    gameFrame++;
    requestAnimationFrame(animate);
}

animate()
