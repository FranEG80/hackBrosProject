function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = 1280;
  this.canvas.height = 720;

  this.vBg = 0;

  this.reset();
}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.start = function(){
  this.clear();
  this.moveAll();
  this.draw();
  window.requestAnimationFrame(this.start.bind(this));
}


Game.prototype.reset = function() {
  this.player = new Pj(this, 'blue', 0);
  this.player2 = new Pj(this, 'red', 1);
  this.background = new Background(this, this.player);
  //this.framesCounter = 0;
  //this.obstacles = [];
 // this.score = 0;
};



Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.player2.draw();
 // this.obstacles.forEach(function(obstacle) { obstacle.draw(); });
  //this.drawScore();  
};

Game.prototype.moveAll = function() {
  this.background.move();
  //this.obstacles.forEach(function(obstacle) { obstacle.move(); });
};

