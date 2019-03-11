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