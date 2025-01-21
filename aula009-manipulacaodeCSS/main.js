
//manipulacao de css com js

//seleciona o textobro e muda a cor de fundo para niggar e a letra para branco;
let ppp = document.querySelector('.textobro');
ppp.style.backgroundColor = "#000";
ppp.style.color = "#fff";

//seleciona o segundo paragrafo e muda.
let text2 = document.querySelector('.ptext2');
text2.setAttribute('class','azul');

/*selecionar a id #foto, dá um console.log(imgg) para a validacao, e usa setAttribute para atribuir uma propriedade source com um valor refenciado a uma imagem armazenada*/
let imgg = document.querySelector('#foto');
imgg.setAttribute('src', 'sousou.jpg');
imgg.setAttribute('width', '300px');

//esse método demandaria muito esforço para uma manipulação de css, mas detalhada.
/*
    box[0].classList.add("class");
    box[1].classList.remove("class");
*/
//seleciona os botoes light e dark
let btlight = document.querySelector('#btn-light');
let btdark = document.querySelector('#btn-dark');

//adiciona aos botoes um evento que escutará um click e realizará uma função;
btlight.addEventListener('click', btnLight);
btdark.addEventListener('click', btnDark);

/* Função light
    seleciona e armazena em uma variavel o body;
    a variavel e feita uma adicao de classe ao qual muda de cor para o claro enquanto remove a classe escura.
*/
function btnLight (){
    let changebody = document.querySelector('body');
    changebody.classList.add("light-body");
    changebody.classList.remove("dark-body");
}
/* Função dark
    seleciona o body;
    adiciona uma classe que deixa o fundo escuro;
    remove a classe de fundo branco por garantia;
*/
function btnDark (){
    let changebody = document.querySelector('body');
    console.log(changebody);
    changebody.classList.add("dark-body");
    changebody.classList.remove("light-body");
}
