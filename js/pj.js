var keysPlayers = [
  { jumpPl1: 87,  //  salto W
    leftPl1: 65,  //  izquierda A
    rightPl1: 68, //  derecha D
    shootPl1: 86, //  disparo V
  }, {
    jumpPl2: 104,  //  salto W
    leftPl2: 100,  //  izquierda A
    rightPl2: 102, //  derecha D
    shootPl2: 80, //  disparo V
  }
]

function Pj(game){
  this.game = game;
  this.ctx = game.ctx

  this.x = 20;
  this.width = 50;
  this.height= 84;
  this.yIni = this.game.canvas.height - 200;
  this.y = this.yIni;
  this.jumpRight = false;
  this.jumpLeft = false;
  this.vy = 1;
  this.vx = 0;
  
}

Pj.prototype.draw = function () {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height )
}

Pj.prototype.move = function() {
  document.onkeydown = function(event) {
    switch(event.keyCode){
      case keysPlayers[0].leftPl1:
        this.x -= 5;
        this.jumpLeft = true;
        break;
      case keysPlayers[0].rightPl1:
        this.x += 5;
        this.jumpRight = true;
        this.vx = 5;
        break;
      case keysPlayers[0].jumpPl1:
        if (this.y >= this.yIni){
          this.y -=5;
          this.vy -=10;
        }
        break;
    }
  }.bind(this)
}

Pj.prototype.jump = function() {
  var gravity = 0.4;
  if (this.y > this.yIni){
    this.vy = 1;
    this.y= this.yIni;
    this.jumpRight = false;
    this.jumpLeft = false;
  } else if (this.y < this.yIni && this.jumpRight == true){
    this.vy += gravity;
    this.y += this.vy;
    this.x += 5;
  } else if (this.y < this.yIni && this.jumpLeft == true){
    this.vy += gravity;
    this.y += this.vy;
    this.x -= 5;
  } else if (this.y < this.yIni){
    this.vy += gravity;
    this.y += this.vy;
  }
}
