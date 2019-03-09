
function Pj(game, color, pl){
  this.game = game;
  this.ctx = game.ctx
  this.color = color;
  this.pl = pl;
  
  this.x = 20 + this.pl * 80;
  this.width = 50;
  this.height= 84;
  this.yIni = this.game.canvas.height - 200;
  this.y = this.yIni;
  this.suelo = this.yIni;

  this.vy = 0;
  this.vx = 0;
  
}

Pj.prototype.draw = function () {
  this.ctx.fillStyle = this.color;

  this.gravity = 0.4;
  Collision(this.game.player, this.game.player2);
// error bg movimiento aqui
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
  this.ctx.fillRect(this.x, this.y, this.width, this.height )
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
  (this.y >= this.yIni) ? this.vy = -10 : null;
}
