//funcoes e arrows;

//funcao sem parametro e sem retorno;
function sume (){
    console.log('hello world!');
}

//funcao sem parametro, com retorno;
function olamundo(){
    return 'hello danger';
}

//function com paramtro e sem retorno;
let x = 1;
let y = 2;
//parametros ou argumentos;
function summer (x, y){
    //comando de saída;
    console.log(x+y);
}

//chamar funcao ou executar funcao;
sume();
//chamar funcao com parametros;
summer(x,y);
//nao foi exebido nada pois nao ha um comando output;
//adicionamos um comando output e entt add fuction;
console.log(olamundo());

//funcao anonima = nao tem nome;
/* Pode ou não ter parametros;
    Pode ou  nao ter retorno;   
*/

let title1 = document.querySelector('#titulo');

title1.addEventListener('click', function(){
    console.log('you clicked in title bro');
});

//Arrow function ES6 2015;
/*
    nao precisa usar a palavra function;
    nao precisa usar a palavra return;
    nao se usa nome na funcao;
    nao precisa usar {} se for apenas uma instrucao;
*/
let bro = () => {
    console.log((Math.random() * 10).toFixed(0));
}   
bro();