function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = 1280;
  this.canvas.height = 720;
  this.floor =  this.canvas.height - 116;

  this.vBg = 0;

  this.running = true;

  this.players = []

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

  if (this.framesCounter > 1000) {
    this.framesCounter = 0;
  }

  window.requestAnimationFrame(this.start.bind(this));
}


Game.prototype.reset = function() {
  
  this.obstacle = new Obstacle(this)
  this.player = new Pj(this, 'blue', 0);
  this.players.push(this.player)
  this.player2 = new Pj(this, 'red', 1);
  this.players.push(this.player2)

  this.background = new Background(this, this.player);
  this.framesCounter = 0;
  this.phase = []
  this.obstacles = [
    [1285, 0, 1, 1], [1285*2, 0, 1, 1], [1285*4, 1, 1, 1], [1285, 1, 5, 1], 
  ];
 //this.generateObstacle();
  //this.phase = this.obstacles.forEach(function(obstacle) { new Obstacle(this, obstacle).bind(this)})
 
};



Game.prototype.generateObstacle = function() {
  this.phase.push(new Obstacle(this, [1285, 1, 1, 1]));
  this.phase.push(new Obstacle(this, [1285*2, 1, 1, 1]));
  this.phase.push(new Obstacle(this, [1285*4, 2, 1, 1]));
  this.phase.push(new Obstacle(this, [(1285*4)+50, 2, 5, 1]));
};


Game.prototype.draw = function() {
  this.background.draw();
  for (i=0; i<2; i++) {
    this.players[i].draw();
    if(i=== 0){
      this.players[i].collision(this.players[1])
    } else if (i===1) {
      this.players[i].collision(this.players[0])
    }
  }
  this.obstacle.draw();
  //this.phase.forEach(function(obstacle) { obstacle.draw(); });
};

Game.prototype.moveAll = function() {
  this.background.move();
 // this.obstacle.move()
  //this.phase.forEach(function(obstacle) { obstacle.move(); });
};

