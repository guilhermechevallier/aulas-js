//tipos de eventos

function carregou(){
    console.log('pagina carregada');
}

function focou() {
    console.log('focou no titulo');
}

function rolouPagina(){
    console.log('scrolling in page');
}

function onCamper() {
    console.log('focou no campo');
}

function offCamperFocused() {
    console.log('saiu do campo de foco');
}
function avisarqteclou(){
    console.log('voce esta teclando');
}

//selecao de botao
/*
    assim quando clicado ira fazer uma mudanca de background;
    btnback = muda para o tema escuro da pagina;
    btnlight = muda para o tema claro da pagina;
*/
let btnback = document.querySelector('#btn1');
btnback.addEventListener('mouseover', function(){
    document.querySelector('body').style.backgroundColor="#212121";
});
let btnlight = document.querySelector('#btn2');
btnlight.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor="#fff";
})