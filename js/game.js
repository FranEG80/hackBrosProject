function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = 1280;
  this.canvas.height = 720;
  this.floor =  this.canvas.height - 116;

  this.vBg = 0;

  this.running = true;

  this.reset();
}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.start = function(){
  this.clear();
  this.moveAll();
  this.draw();

  this.framesCounter++;

  // controlamos que frameCounter no sea superior a 1000
  if (this.framesCounter > 1000) {
    this.framesCounter = 0;
  }

  window.requestAnimationFrame(this.start.bind(this));
}


Game.prototype.reset = function() {
  //this.obstacle = new Obstacle(this)
  this.player = new Pj(this, 'blue', 0);
  this.player2 = new Pj(this, 'red', 1);
  this.background = new Background(this, this.player);
  this.framesCounter = 0;
  this.phase = []
  this.obstacles = [
    [1285, 0, 1, 1], [1285*2, 0, 1, 1], [1285*4, 1, 1, 1], [1285, 1, 5, 1], 
  ];
  this.generateObstacle();
  //this.phase = this.obstacles.forEach(function(obstacle) { new Obstacle(this, obstacle).bind(this)})
 // this.score = 0;
};



Game.prototype.generateObstacle = function() {
  this.phase.push(new Obstacle(this, [1285, 1, 1, 1]));
  this.phase.push(new Obstacle(this, [1285*2, 1, 1, 1]));
  this.phase.push(new Obstacle(this, [1285*4, 2, 1, 1]));
  this.phase.push(new Obstacle(this, [(1285*4)+50, 2, 5, 1]));
};


Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.player2.draw();
  //this.obstacle.obs();
  this.phase.forEach(function(obstacle) { obstacle.draw(); });
  //this.drawScore();  
};

Game.prototype.moveAll = function() {
  this.background.move();
 // this.obstacle.move()
  this.phase.forEach(function(obstacle) { obstacle.move(); });
};

