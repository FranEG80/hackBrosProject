window.onload = function() {
  var game = new Game("canvasGame");

 window.requestAnimationFrame(game.start.bind(game));
 document.onkeydown = function(event) {
   switch (event.keyCode){
    case 87: game.player.jump(); break;
    case 65: game.player.moveLeft(); break;
    case 68: game.player.moveRight(); break;
    //case 86: game.player.shoot(); break;
    case 104: game.player2.jump(); break;
    case 100: game.player2.moveLeft(); break;
    case 102: game.player2.moveRight(); break;
    //case 80: game.player2.shoot(); break;
   }
 }
 document.onkeyup = function(event){
  switch (event.keyCode){
    case 65 : game.player.stopMove(); break;
    case 100 : game.player2.stopMove(); break;
    case 68  : game.player.stopMove(); break;
    case 102 : game.player2.stopMove(); break;
  }

 }
};
