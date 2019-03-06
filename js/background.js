function Background(game) {
  this.game = game;
  this.plPosition = this.game.player.vx

  this.img = new Image();
  this.img.src = 'img/bg.png';

  this.x = 0;
  this.y = 0;

  this.dx = 5;
}

Background.prototype.draw = function() {
  this.bgWidth = this.game.canvas.width;
  this.game.ctx.drawImage(this.img, this.x, this.y, this.bgWidth , this.game.canvas.height);
  this.game.ctx.drawImage(this.img, this.x + this.bgWidth, this.y, this.game.canvas.width, this.game.canvas.height);
  };

Background.prototype.move = function() {
  this.x -= this.plPosition;
  console.log(this.plPosition)

  if (this.x < -this.game.canvas.width) this.x = 0;
};