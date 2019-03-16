
function Obstacle(game, h, d) { // myArray = [posicionX, posicionY, ancho, alto]
  this.game = game;
  
  this.movile = true;

  this.width = 70
  this.height = h
  this.x = d
  this.y = this.game.floor - this.height

  this.img = new Image();
  this.img.src = 'img/piedra.png';}

Obstacle.prototype.draw = function() {
  if (this.height == 70) {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height );
  } else if (this.height == 140) {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height/2 )
    this.game.ctx.drawImage(this.img, this.x, this.y+70, this.width, this.height/2 )
  };
}



Obstacle.prototype.collision = function (player){

  if (player.x + player.width > this.x && player.x < this.x + this.width && player.y < this.y + this.height && player.y + player.height > this.y ) {
    player.x += -player.vx
    player.vx = 0;

  }  else if (player.x + player.width < this.x && player.y + player.height <= this.y) {
    player.yIni = this.game.floor - player.height
  }
      
  if (player.x + player.width  > this.x && player.x < this.x + this.width && player.y + player.height < this.y && player.y < this.y){
    player.yIni = this.y - player.height -1
  } else if (player.x > this.x + this.width && player.y <= this.y - player.height) {
    player.yIni = this.game.floor - player.height
  }  
  
  if (player.x + player.width  > this.x && player.x < this.x + this.width && 
    player.y < this.y + this.height && player.y + player.height > this.y) {
    player.vy=0;
    player.y= this.y + this.height;
  }
}
Obstacle.prototype.move = function() {
  this.vx = this.game.vBg;
  this.x -= this.vx;
};
