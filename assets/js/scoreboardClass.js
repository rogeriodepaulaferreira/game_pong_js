function scoreboard (screenWidth,screenHeight){
  this.myPoints = 0;
  this.opponentsPoints = 0;
  this.screenWidth = screenWidth;
  this.screenHeight = screenHeight;
  this.soundPoint = loadSound("assets/mp3/ponto.mp3");
}

scoreboard.prototype.create = function(ball){

  let fontSize = 16;

  textSize(fontSize);
  textAlign(CENTER);

  let postionXMyPoints = (this.screenWidth / 2) -30;
  let postionYMyPoints = this.screenHeight/10;
  let postionXOpponentsPoints = (this.screenWidth / 2) +30;
  let postionYOpponentsPoints = this.screenHeight/10;
  let widthBox = 40;
  let heightBox = 20;

  stroke(255);
  fill(color(255,140,0));
  rect((postionXMyPoints - (widthBox/2)),postionYMyPoints-fontSize, widthBox, heightBox);
  rect(postionXOpponentsPoints - (widthBox/2),postionYOpponentsPoints-fontSize, widthBox, heightBox);


  fill(255);
  text(this.myPoints,postionXMyPoints, postionYMyPoints);
  text(this.opponentsPoints,postionXOpponentsPoints, postionYOpponentsPoints);




  this.ball = ball;
}

scoreboard.prototype.score = function(){
  if (this.ball.rightBall > this.screenWidth){
    this.myPoints += 1;
    this.soundPoint.play();
  }
  if (this.ball.leftBall < 0){
    this.opponentsPoints += 1;
    this.soundPoint.play();
  }
}