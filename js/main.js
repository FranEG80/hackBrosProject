window.onload = function() {
  var game = new Game("canvasGame");

 window.requestAnimationFrame(game.start2.bind(game));
};