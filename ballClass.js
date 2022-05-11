/*Criando as configuração da bola de tenis*/
function ball(startingPositionX,startingPositionY, diameter, startingSpeedX, startingSpeedY) {
  /* Posição da bola de tênis na tela */
  this.positionX = startingPositionX;
  this.positionY = startingPositionY;
  /* Posição da bola de tênis na tela */

  /* Tamanho da bola de tênis */
  this.diameter = diameter;
  /* Tamanho da bola de tênis */

  /* Velocidade que a bola de tênis ira percorrer na tela */
  this.speedX = startingSpeedX;
  this.speedY = startingSpeedY;
  /* Velocidade que a bola de tênis ira percorrer na tela */

  /* Configurações da bola de tênis */
  this.ray = this.diameter / 2;
  this.topBall = this.positionY - this.ray;
  this.leftBall = this.positionX - this.ray;
  this.rightBall = this.positionX + this.ray;
  this.bottomBall = this.positionY + this.ray;
  /* Configurações da bola de tênis */
}

/* Função que irá criar a bola de tênis na tela */
ball.prototype.create = function(){
  circle(bola.positionX,bola.positionY,bola.diameter);
}
/* Função que irá criar a bola de tênis na tela */

/* Função que irá mover a bola de tênis pela tela */
ball.prototype.move = function() {

  this.positionX += this.speedX;
  this.positionY += this.speedY;

  this.topBall = this.positionY - this.ray;
  this.leftBall = this.positionX - this.ray;
  this.rightBall = this.positionX + this.ray;
  this.bottomBall = this.positionY + this.ray;

};
/* Função que irá mover a bola de tênis pela tela */

/* Função que faz mudar a direção da bola de tênis */
ball.prototype.direction = function(changeX = false, changeY = false) {
  if(changeX){ 
    this.speedX *= -1; 
  }
  if(changeY){
    this.speedY *= -1;
  }
};
/* Função que faz mudar a direção da bola de tênis */


/* Função que checamos se a bola de tenis toca na borda da tela e chamamos a função de mudar de direção */
ball.prototype.checkCorner = function(widthScreen, heightScreen){ 
  
  if(this.rightBall > widthScreen || this.leftBall < 0 ){
    this.direction(true);
  } 
  if(this.bottomBall > heightScreen || this.topBall < 0){
    this.direction(false,true);
  }
}
/* Função que checamos se a bola de tenis toca na borda da tela e chamamos a função de mudar de direção */

/* Função que checamos se a bola de tênis bate na raquete de tênis e mudamos de direção */
ball.prototype.checkRacket = function(racket){

  if(
    this.leftBall < racket.rightRacket &&
    this.topBall < racket.bottomRacket &&
    this.bottomBall > racket.topRacket
  ){
    this.direction(true);
  }

  if(
      this.rightBall < racket.leftRacket &&
      this.topBall < racket.bottomRacket &&
      this.bottomBall > racket.topRacket
  ){
    this.direction(true);
  }

}
/* Função que checamos se a bola de tênis bate na raquete de tênis e mudamos de direção */
















