function racket(startingPositionX,startingPositionY, startingWidth, startingHeight) {
  this.positionX = startingPositionX;
  this.positionY = startingPositionY;
  this.width = startingWidth; 
  this.height = startingHeight;
  
  this.speedX = 2;
  this.speedY = 2;
  
  this.topRacket = this.positionY;
  this.leftRacket = this.positionX;  
  this.rightRacket = this.positionX + this.width;
  this.bottomRacket = this.positionY + this.height;
}

racket.prototype.updateAtt = function(){
  this.topRacket = this.positionY;
  this.leftRacket = this.positionX;
  this.rightRacket = this.positionX + this.width;
  this.bottomRacket = this.positionY + this.height;
}

racket.prototype.create = function(){
  rect(this.positionX,this.positionY, this.width, this.height);
}

racket.prototype.controls = function(heightScreen){
  if(keyIsDown(UP_ARROW)){
    if(this.topRacket > 0){
      this.positionY -= this.speedY;
    }
    
  }
  if(keyIsDown(DOWN_ARROW)){
    if(this.bottomRacket < heightScreen){
      this.positionY += this.speedY;
    } 
  }

  this.updateAtt();
}

racket.prototype.autoPlay = function(chasedBall,heightScreen){
  this.positionY =  chasedBall.positionY - (this.height / 2);
  this.updateAtt();
  if(this.topRacket <= 0){
    this.positionY = 0;
  }
  if(this.bottomRacket > heightScreen){
    this.positionY = heightScreen-this.height;
  }
}
