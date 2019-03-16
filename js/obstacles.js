
/* 
function elementAleatory(myArray) {
  return myArray[Math.floor(Math.random()* myArray.length)];
} */

function Obstacle(game, myArray) { // myArray = [posicionX, posicionY, ancho, alto]
  this.game = game;
  
  //this.x = myArray[0]
  //this.y = (this.game.floor) - ((this.game.player.height + 10) * myArray[1]) // aqui falla por el game.floor
  this.x = 500
  this.y = 500
  this.width = 100// * myArray[2]  // * Math.floor(Math.random()*8 );
  this.height = 50// * myArray[3]

/*   this.x = 900
  this.y = this.game.floor - elementAleatory(this.position);
 */}

Obstacle.prototype.draw = function() {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height )
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

Obstacle.prototype.obs = function () {
      this.h0 = this.game.floor - this.height;
      this.positionX = [1285, 1285+300, 1285+(300*2), 1285+300*3, 1285+300*4, 1285+300*5, 1285+300*600, 1285+300*7, 1285+300*8, 1285+300*9]

      this.hPlayer = this.game.player.height - 20;
      this.positionY = [this.h0, this.h0-this.hplayer, this.h0-(this.hplayer*2)]
      
      this.game.ctx.fillRect(this.positionX[0], this.h0, this.width, this.height);
      this.game.ctx.fillRect(this.positionX[1], this.h0, this.width, this.height);

      this.game.ctx.fillRect(this.positionX[2], 450, this.width*1, (this.game.floor - 450));
      this.game.ctx.fillRect(this.positionX[2]+50, 450, this.width*2, this.height*1);
}

Obstacle.prototype.move = function() {
  this.vx = this.game.vBg;
  this.x -= this.vx;
};