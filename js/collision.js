function Collision(element1, element2) {
  if (element1.x + element1.width >= element2.x && element1.y + element1.height >= element2.y && element1.x + element1.width < element2.x + element2.width) {

    element1.x = element2.x - element2.width;
  } else if (element1.x >= element2.x  && element1.y <= element2.y - element1.height && element1.x <= element2.x + element2.width) {
    
    element1.yIni = element2.y - element1.height;
  } else if (element1.x + element1.width <= element2.x || element1.x >= element2.x + element2.width && element1.x + element1.width <= element2.y) {
    element1.yIni = element1.suelo;
  } else if (element1.x ) {

  }
//  &&  && element1.y + element1.height >= element2.y && element2.y + element2.height >= element1.y
  
}