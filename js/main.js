window.onload = function() {
  var game = new Game("canvasGame");

 window.requestAnimationFrame(game.start.bind(game));
};