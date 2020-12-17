var x = (200)
var y = (173)
var opcao = 1
var tela =0
var inst, cred;
var f1a, f2b, f3a, f4c, f5a, f6b, f7a, f8c, f9a, f10b;
var marcador;
var xm = 0;
var t = 100;
var over, sucesso;

function preload() {
  inst = loadImage('instruções.png');
  cred = loadImage('créditos.png');
  marcador = loadImage('X.png');
  f1a = loadImage('f1a.png');
  f2b = loadImage('f2b.png');
  f3a = loadImage('f3a.png');
  f4c = loadImage('f4c.png');
  f5a = loadImage('f5a.png');
  f6b = loadImage('f6b.png');
  f7a = loadImage('f7a.png');
  f8c = loadImage('f8c.png');
  f9a = loadImage('f9a.png');
  f10b = loadImage('f10b.png');
  over = loadImage('gameover.png');
  sucesso = loadImage('sucesso.png');
}

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(0);
  if (tela == 0)
    menu();
  if (tela == 1)
    fase1();
  if (tela == 2)
    instrucoes();
  if (tela == 3)
    creditos();
  if (tela == 4)
    fase2();
  if (tela == 5)
    fase3();
  if (tela == 6)
    fase4();
  if (tela == 7)
    fase5();
  if (tela == 8)
    fase6();
  if (tela == 9)
    fase7();
  if (tela == 10)
    fase8();
  if (tela == 11)
    fase9();
  if (tela == 12)
    fase10();
  if (tela == 13)
    gameover();
  if (tela == 14)
    vitoria();
}

function menu() {
  fill('#fffff')
  rectMode(RADIUS);
  fill(255);
  rect(x, y, 85, 35, 20);
  rectMode(CENTER);
  fill(0);
  rect(x, y, 160, 66, 20);

  fill('#ffffff');
  textStyle(BOLD);
  textSize(35);
  text('Quiz das Navegações', 17, 90);

  textStyle(ITALIC);
  textSize(30);
  text('Jogar', 130, 180);
  text('Instruções', 130, 277);
  text('Créditos', 130, 375);
}

function fase1() {
  background(f1a);
  image(marcador, xm, 0);

  if (keyIsDown(88) && xm == 0) {
    tela = 4;
  } else if (keyIsDown(88) && xm != 0) {
    tela = 13;
  }
}

function fase2() {
  background(f2b);
  image(marcador, xm, 0);
  t--;
  if (keyIsDown(88) && xm == 130 && t < 0) {
    tela = 5;
    t = 100;

  } else if (keyIsDown(88) && xm != 130 && t < 0) {
    tela = 13;
  }
}

function fase3() {
  background(f3a);
  image(marcador, xm, 0);
  t--
  if (keyIsDown(88) && xm == 0 && t < 0) {
    tela = 6;
    t = 100;
  } else if (keyIsDown(88) && xm != 0 && t < 0) {
    tela = 13;
  }
}

function fase4() {
  background(f4c);
  image(marcador, xm, 0);
  t--;
  if (keyIsDown(88) && xm == 260 && t < 0) {
    tela = 7;
    t = 100;
  } else if (keyIsDown(88) && xm != 260 && t < 0) {
    tela = 13;
  }
}

function fase5() {
  background(f5a);
  image(marcador, xm, 0);
  t--;
  if (keyIsDown(88) && xm == 0 && t < 0) {
    tela = 8;
    t = 100;
  } else if (keyIsDown(88) && xm != 0 && t < 0) {
    tela = 13;
  }
}

function fase6() {
  background(f6b);
  image(marcador, xm, 0);
  t--;
  if (keyIsDown(88) && xm == 130 && t < 0) {
    tela = 9;
    t = 100;
  } else if (keyIsDown(88) && xm != 130 && t < 0) {
    tela = 13;
  }
}

function fase7() {
  background(f7a);
  image(marcador, xm, 0);
  t--;
  if (keyIsDown(88) && xm == 0 && t < 0) {
    tela = 10;
    t = 100;
  } else if (keyIsDown(88) && xm != 0 && t < 0) {
    tela = 13;
  }
}

function fase8() {
  background(f8c);
  image(marcador, xm, 0);
  t--;
  if (keyIsDown(88) && xm == 260 && t < 0) {
    tela = 11;
    t = 100;
  } else if (keyIsDown(88) && xm != 260 && t < 0) {
    tela = 13;
  }
}

function fase9() {
  background(f9a);
  image(marcador, xm, 0);
  t--;
  if (keyIsDown(88) && xm == 0 && t < 0) {
    tela = 12;
    t = 100;
  } else if (keyIsDown(88) && xm != 0 && t < 0) {
    tela = 13;
  }
}

function fase10() {
  background(f10b);
  image(marcador, xm, 0);
  t--;
  if (keyIsDown(88) && xm == 130 && t < 0) {
    tela = 14;
    t = 100;
  } else if (keyIsDown(88) && xm != 130 && t < 0) {
    tela = 13;
  }
}

function gameover() {
  background(over);
  xm = 0;
  t = 110;
}

function vitoria() {
  background(sucesso)
  xm = 0;
  t = 110;
}

function instrucoes() {
  background(inst)
}

function creditos() {
  background(cred)
}

function keyPressed() {
  if (keyIsDown(38) && y > 200) {
    y = y - 96;
    opcao = opcao - 1;
    console.log(opcao);
  }
  if (keyIsDown(40) && y < 322) {
    y = y + 96;
    opcao = opcao + 1;
    console.log(opcao);
  }
  if (keyIsDown(39) && xm < 260) {
    xm = xm + 130;
  }
  if (keyIsDown(37) && xm > 0) {
    xm = xm - 130;
  }
  if (key == "Enter") {
    tela = opcao;
  }
  if (key == "Escape") {
    tela = 0;
   
  }
}