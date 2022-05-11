
let laguraTela = 800;
let alturaTela = 400;

var bola;
var raquete;
var raqueteOponente;
var scoreboard;
let ost;

function preload(){
  bola = new ball(laguraTela/2,alturaTela/2,30, 3, 3);
  raquete = new racket(10,(alturaTela/2)-60,10,60);
  raqueteOponente = new racket(((laguraTela-10)-10),(alturaTela/2)-60,10,60);
  scoreboard = new scoreboard(laguraTela,alturaTela);
  ost = loadSound("assets/mp3/trilha.mp3");
}

function setup() {
  createCanvas(laguraTela, alturaTela);
  ost.loop();
}

function draw() {
  background(0);

  raquete.create();
  raquete.controls(height);
  raqueteOponente.create();
  
  bola.create();
  bola.move();
  bola.checkCorner(width,height);
  bola.checkRacket(raquete, raqueteOponente);
  raqueteOponente.autoPlay(bola,height);
  scoreboard.create(bola);
  scoreboard.score();

   
}