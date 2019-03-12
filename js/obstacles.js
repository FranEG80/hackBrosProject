var obstacle = [
  [80, 160],


]

function elementAleatory(myArray) {
  return myArray[Math.floor(Math.random()* myArray.length)];
}
function Obstacle(game) {

  this.game = game;
  this.game.ctx.fillStyle = 'green';
  this.position = [300, 150, 100]
  this.width = 50 * Math.floor(Math.random()*8 );
  this.height = 50;

  this.x = 900
  this.y = this.game.floor - elementAleatory(this.position);
}

Obstacle.prototype.draw = function() {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height )
}


Obstacle.prototype.collision = function (player){
  
  if (player.x + player.width > this.x && player.x < this.x 
    && player.y < this.y + this.height && player.y + player.height > this.y ) {
      player.vx = 0;
      player.x = this.x - player.width
    } else if (player.x + player.width > this.x && player.x < this.x + this.width
      && player.y + player.height < this.y && player.y < this.y){
        player.yIni = this.y - player.height -1
    } 
  if (player.x < this.x + this.width && player.x > this.x 
      && player.y < this.y + this.height && player.y + player.height > this.y ) {
        player.x = this.x+this.width
      } else if (player.x + player.width > this.x && player.x < this.x + this.width
        && player.y + player.height < this.y && player.y < this.y){
          player.yIni = this.y - player.height -1
      } //  player.y <= this.y - player.height


   if (player.x + player.width > this.x && player.x < this.x + this.width && this.y + this.height > player.y ) {
      player.vy = 0;
      player.y = this.y + this.height 
  }
  
  /* ESTE ES BUENO
  
  if (player.x + player.width > this.x && player.x < this.x + this.width 
    && player.y < this.y + this.height && player.y + player.height > this.y ) {
      player.vx = -player.vx
    } else if (player.x + player.width > this.x && player.x < this.x + this.width
      && player.y + player.height < this.y && player.y < this.y){
        player.yIni = this.y - player.height -1
    } //  player.y <= this.y - player.height


   if (player.x + player.width > this.x && player.x < this.x + this.width 
    && this.y + this.height > player.y ) {
      player.vy = 0;
      player.y = this.y + this.height +1 
  }
  //player.x + player.width > this.x && player.x < this.x + this.width */
 
  
}