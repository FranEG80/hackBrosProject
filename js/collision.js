function Collision(element1, element2) {
  if (element1.x + element1.width >= element2.x && element1.y + element1.height >= element2.y && element1.x + element1.width < element2.x + element2.width) {

    element1.x = element2.x - element2.width;
  } else if (element1.x >= element2.x  && element1.y <= element2.y - element1.height 
    && element1.x <= element2.x + element2.width) {
    element1.yIni = element2.y - element1.height;
  } else if (element1.x + element1.width <= element2.x || element1.x >= element2.x + element2.width && element1.x + element1.width <= element2.y) {
    element1.yIni = element1.suelo;
  } else if (element1.x ) {

  }
//  &&  && element1.y + element1.height >= element2.y && element2.y + element2.height >= element1.y
  
}

// this.y <= player.y - obstacle.height && 

// player.y <= this.y - player.height

//
/* } else if (player.x + player.width < this.x || player.x > this.x + this.width && player.yIni != player.suelo) {
  player.yIni = player.suelo
} */


Obstacle.prototype.collision = function (player){


  if (player.x + player.width > this.x && player.x < this.x + this.width 
    && player.y < this.y + this.height && player.y + player.height > this.y ) {
      player.x += -player.vx
      player.vx = -(player.vx*1.1)
  }  else if (player.x + player.width < this.x && player.y + player.height <= this.y) {
    player.yIni = this.game.floor - player.height
  }
      
  if (player.x + player.width  > this.x && player.x < this.x + this.width && player.y + player.height < this.y && player.y < this.y){
    player.yIni = this.y - player.height -1
  } else if (player.x > this.x + this.width && player.y <= this.y - player.height) {
    player.yIni = this.game.floor - player.height
  }  
  
  if (player.x + player.width  > this.x +1 && player.x < this.x + this.width && 
    player.y < this.y + this.height && player.y + player.height > this.y) {
    player.vy=0;
    player.y= this.y + this.height;
  }

}