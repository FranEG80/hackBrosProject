
function Pj(game, color, pl){
  this.game = game;
  this.ctx = game.ctx
  this.color = color;
  this.pl = pl;
  
  this.width = 115;
  this.x = 20 + this.pl * this.width*2;
  this.height= 143;
  this.yIni = this.game.floor - this.height;
  this.y = this.yIni;
  this.suelo = this.yIni;

  this.count = 1;

  this.gravity = 0.4;
  this.vy = 0;
  this.vx = 0;

  this.imgRight = new Image();
  this.imgRight.src = './img/robotRight.png'
  // número de imágenes diferentes
  this.imgRight.frames = 5;
  this.imgRight.frameIndex = 0; 

  this.imagenes();

}

Pj.prototype.imagenes = function() {

  this.img0 = new Image();
  this.img1 = new Image();
  this.img2 = new Image();
  this.img3 = new Image();
  this.imgjump = new Image();
  this.img0left = new Image();
  this.img1left = new Image();
  this.img2left = new Image();
  this.img3left = new Image();
  this.imgjumpleft = new Image();

  this.img0.src = "./img/robot0.png"
  this.img1.src = "./img/robot1.png"
  this.img2.src = "./img/robot2.png"
  this.img3.src = "./img/robot3.png"
  this.imgjump.src = "./img/robotjump.png"
  this.img0left.src = "./img/robot0left.png"
  this.img1left.src = "./img/robot1left.png"
  this.img2left.src = "./img/robot2left.png"
  this.img3left.src = "./img/robot3left.png"
  this.imgjumpleft.src = "./img/robotjumpleft.png"  
}

Pj.prototype.draw = function () {
  this.ctx.fillStyle = this.color;

  Collision(this.game.player, this.game.player2);
  Collision(this.game.player2, this.game.player);

  this.game.obstacle.collision(this)

  //this.game.phase.forEach(function(obstacle){obstacle.collision(this)});
  this.limitMove();
  
  if (this.count > 1000) {
    this.count = 0;
  }


  if (this.pl == 0) {
    this.ctx.fillRect(this.x, this.y, this.width, this.height )
  } else {
    
    this.dibuja();
    this.animateImg();
   
  } 
}

Pj.prototype.dibuja = function() {
  this.game.ctx.drawImage(
    this.imgRight,
    this.imgRight.frameIndex * Math.floor(this.imgRight.width / this.imgRight.frames),
    0,
    Math.floor(this.imgRight.width / this.imgRight.frames),
    this.imgRight.height,
    this.x,
    this.y,
    this.width,
    this.height 
  )
}

Pj.prototype.limitMove = function() {
  
  this.x += this.vx;
  if (this.x <= 0) {
    this.x = 0;
  } else if (this.x > 720) {
    this.game.vBg = 5;
    this.x = 720;
  }

  this.y += this.vy;
  if (this.y >= this.yIni) {
    this.vy = 0;
    this.y = this.yIni;
  } else {
    this.vy += this.gravity;
  }
}

Pj.prototype.animateImg = function() {
  // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  if (this.count % 6 === 0) {
    this.imgRight.frameIndex += 1;

    // Si el frame es el último, se vuelve al primero
    if (this.imgRight.frameIndex > 2) this.imgRight.frameIndex = 0;
  }
};

Pj.prototype.moveImg = function() {
  
  if (this.vx == 0 && this.vy == 0 && this.yIni == this.y) {
    this.game.ctx.drawImage(this.img0, this.x, this.y, this.width , this.height);
  } else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >0 && this.count <=10) {
    this.game.ctx.drawImage(this.img1, this.x, this.y, this.width , this.height);
  } else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >10 && this.count <=20) {
    this.game.ctx.drawImage(this.img1, this.x, this.y, this.width , this.height);
  } else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >20 && this.count <=30) {
    this.game.ctx.drawImage(this.img2, this.x, this.y, this.width , this.height);
  } else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >30 && this.count <= 40) {
    this.game.ctx.drawImage(this.img0, this.x, this.y, this.width , this.height);
  }else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >40) {
    this.count=0;
  } else if (this.y != this.yIni && (this.vx > 0 || this.vx == 0)) {
    this.game.ctx.drawImage(this.imgjump, this.x, this.y, this.width , this.height);
  } else if (this.vx < 0 && this.vy == 0 && this.yIni == this.y && this.count % 10) {
    this.game.ctx.drawImage(this.img3left, this.x, this.y, this.width , this.height);
  } else if (this.vx < 0 && this.vy == 0 && this.yIni == this.y && this.count % 20) {
    this.game.ctx.drawImage(this.img2left, this.x, this.y, this.width , this.height);
  } else if (this.vx < 0 && this.vy == 0 && this.yIni == this.y && this.count % 30) {
    this.game.ctx.drawImage(this.img1left, this.x, this.y, this.width , this.height);
  } else if (this.y != this.yIni && this.vx < 0) {
    this.game.ctx.drawImage(this.imgjumpleft, this.x, this.y, this.width , this.height);
  }
} 

Pj.prototype.moveRight = function() {
  this.vx = 5;
}

Pj.prototype.moveLeft = function(){
  this.vx = -5;
}

Pj.prototype.stopMove = function() {
  this.game.vBg = 0;
  this.vx = 0;
}

Pj.prototype.jump = function() {
  if (this.y >= this.yIni) this.vy = -(8 + this.pl * 3);
}

