
let laguraTela = 800;
let alturaTela = 400;

var bola = new ball(laguraTela/2,alturaTela/2,30, 3, 3);
var raquete = new racket(30,(alturaTela/2)-60,10,120);

var raqueteOponente = new racket(((laguraTela-10)-30),(alturaTela/2)-60,10,120);

function setup() {
  createCanvas(laguraTela, alturaTela); 
}

function draw() {
  background(0);

  raquete.create();
  raquete.controls(height);
  raqueteOponente.create();
  
  bola.create();
  bola.move();
  bola.checkCorner(width,height);
  bola.checkRacket(raquete);
  bola.checkRacket(raqueteOponente);

  raqueteOponente.autoPlay(bola,height);


   
}