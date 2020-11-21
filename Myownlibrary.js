function isTouching(move,fixed) {
    if(move.x - fixed.x < fixed.width/2 + move.width/2
      && fixed.x - move.x < fixed.width/2 + move.width/2
      && move.y - fixed.y < fixed.height/2 + move.height/2
      && fixed.y - move.y < fixed.height/2 + move.height/2) {
        return  true
      }
      else{return  false
      }
  }
  
  function bounceOff(rect1,Rect2) {
    if (rect1.x - Rect2.x < Rect2.width/2 + rect1.width/2
      && Rect2.x - rect1.x < Rect2.width/2 + rect1.width/2) {
        rect1.velocityX = rect1.velocityX * (-1);
        Rect2.velocityX = Rect2.velocityX * (-1);
  }
  if (rect1.y - Rect2.y < Rect2.height/2 + rect1.height/2
    && Rect2.y - rect1.y < Rect2.height/2 + rect1.height/2){
      rect1.velocityY = rect1.velocityY * (-1);
      Rect2.velocityY = Rect2.velocityY * (-1);
  }
  }