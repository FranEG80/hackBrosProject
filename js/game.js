function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = 1280;
  this.canvas.height = 720;


  this.reset();
}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.start2 = function(){
  this.clear();
  this.moveAll();
  this.draw();
  window.requestAnimationFrame(this.start2.bind(this));

}


Game.prototype.reset = function() {
  this.background = new Background(this);
 // this.player = new Player(this);
  this.framesCounter = 0;
  //this.obstacles = [];
 // this.score = 0;
};



Game.prototype.draw = function() {
  this.background.draw();
  //this.player.draw();
 // this.obstacles.forEach(function(obstacle) { obstacle.draw(); });
  //this.drawScore();  
};

Game.prototype.moveAll = function() {
  console.log(this.background)
  this.background.move();
  //this.player.move();
  //this.obstacles.forEach(function(obstacle) { obstacle.move(); });
};