
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

  this.count = 0;
  this.score = 0;

  this.gravity = 0.4;
  this.vy = 0;
  this.vx = 0;

  this.imgRight = new Image();
  this.imgRight.src = './img/robot'+this.pl+'.png';

  this.imgRight.frames = 10;
  this.imgRight.frameIndex = 0; 


}


Pj.prototype.draw = function () {
  this.ctx.fillStyle = this.color;

  this.game.obstacle.collision(this)

  this.x += this.vx;
  this.y += this.vy;

  //this.game.phase.forEach(function(obstacle){obstacle.collision(this)});
  this.limitMove();
  this.drawScore();

  this.dibuja();
  this.moveImg();

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
  this.count ++;
}

Pj.prototype.limitMove = function() {
  
  if (this.x <= 0) {
    this.x = 0;
  } else if (this.x > 720) {
    this.game.vBg = 5;
    this.x = 720;
    this.score += 0.2;

  }

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
    if (this.imgRight.frameIndex > 3  ) this.imgRight.frameIndex = 0;
  }
};

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

Pj.prototype.drawScore = function() {

  this.ctx.font = "30px Helvetica";
  this.ctx.fillStyle = "black";
  this.ctx.fillText('Player', 50 + this.pl * this.width*2, 50);
  this.ctx.fillText(Math.floor(this.score), 200 + this.pl * this.width*2, 50);

}

 Pj.prototype.moveImg = function() {
  if (this.vx >= 0 && this.vy != 0){
    this.imgRight.frameIndex = 3
  } else if (this.vx <= 0 && this.vy != 0) {
    this.imgRight.frameIndex = 5
  } else if (this.vx == 0 && this.vy == 0 && this.yIni == this.y) {
    this.imgRight.frameIndex = 0
  } else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >0 && this.count <=05) {
    this.imgRight.frameIndex = 1
  } else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >10 && this.count <=20) {
    this.imgRight.frameIndex = 2
  } else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >20 && this.count <=30) {
    this.imgRight.frameIndex = 3
  } else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >30 && this.count <=40) {
    this.imgRight.frameIndex = 0
  } else if (this.vx > 0 && this.vy == 0 && this.yIni == this.y && this.count >40 ) {
    this.count=0;
  } else if (this.vx == 0 && this.vy == 0 && this.yIni == this.y) {
    this.imgRight.frameIndex = 9
  } else if (this.vx < 0 && this.vy == 0 && this.yIni == this.y && this.count >0 && this.count <=05) {
    this.imgRight.frameIndex = 8
  } else if (this.vx < 0 && this.vy == 0 && this.yIni == this.y && this.count >10 && this.count <=20) {
    this.imgRight.frameIndex = 7
  } else if (this.vx < 0 && this.vy == 0 && this.yIni == this.y && this.count >20 && this.count <=30) {
    this.imgRight.frameIndex = 6
  } else if (this.vx < 0 && this.vy == 0 && this.yIni == this.y && this.count >30 && this.count <=40) {
    this.imgRight.frameIndex = 9
  } else if (this.vx < 0 && this.vy == 0 && this.yIni == this.y && this.count >40 ) {
    this.count=0;
  } 
  

} 


Pj.prototype.collision = function (player){

  if (this.x  > player.x && this.x < player.y + player.width &&
    this.y + this.height < player.y) {
      this.yIni = player.y - player.height
    }
  if (this.x + this.width > player.x && this.x < player.x && player.y < this.y + this.height && player.y + player.height > this.y) {
    this.x = player.x - this.width
  }
  if (this.x < player.x + player.width && this.x + this.width > player.x + player.width && player.y < this.y + this.height && player.y + player.height > this.y) {
    this.x = player.x + player.width
  }
 
}