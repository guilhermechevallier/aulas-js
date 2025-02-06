//definicao de variaveis e selecoes dos componentes
let min = 1;
let max = 10;
let sortPrinter = 0;
let status = ''

//input text user
let inputNum = document.querySelector('#numberr');
//button submit value
let btnChute = document.querySelector('#chutar');
//btn music
let soundtrack1 = document.querySelector('#btn-music');
// msg de alert 
let alertmsg = document.querySelector('#situation');
//sound
let sounder = document.querySelector('#soundtrack');

//quando a pagina for carregado um numero entre 1 e 10 e sorteado;
const NumSort = () =>{
    sortPrinter =  Math.floor(Math.random() * (max - min + 1)) + min
    console.log(sortPrinter);
}

//when you click in text will player a music;
const ActiveSound = () =>{
    sounder.play();
}
//when you click in btn sound, pause;
const OffSound = () =>{
    sounder.pause();
    sounder.currentTime = 0;
}
//block in btn chute when blur text;
const Disbtn = () =>{
    btnChute.setAttribute('disabled', 'disabled');
    btnChute.style.background = '#ccc';
    btnChute.style.cursor = 'not-allowed';
}
//active btn when you click in text;
const Actbtn = () =>{
    btnChute.setAttribute('enabled', 'enabled');
    btnChute.style.background = '#007bff';
    btnChute.style.cursor = 'pointer';
}
//validacao do input para disabled quando o valor nao corresponder as expectativas;
function validad() {
    let inputNum1 = inputNum.value;
    if (inputNum1 <= 0 || inputNum1 > 10) {
        console.log('tentativa invalida');
        alertmsg.textContent = 'Digite um número entre 1 e 10';
        alertmsg.classList.remove('accept');
        alertmsg.classList.remove('error');
        alertmsg.classList.add('alerta');
        inputNum.value = '';
        Disbtn();
    } else {
        console.log('jogando...');
    }
}
//verificacao se input é igual ou nao ao numero sorteado;
const playgame = () => {
    let inputNum2 = parseInt(inputNum.value);
    if(inputNum2 === sortPrinter){
        let status = 'accept';
        statusgame(status);
    } else if(inputNum2 > sortPrinter){
        let status = 'hight';
        statusgame(status);
    }else if(inputNum2 < sortPrinter){
        let status = 'low';
        statusgame(status);
    }else {
        console.log('input wrong');
    }
}
//switch case de preparacao do resultado com base nos estatus;
const statusgame = (status) =>{
    switch (status){
        case 'accept': 
            alertmsg.textContent = "Acertou!";
            alertmsg.classList.add('accept');
            alertmsg.classList.remove('error');
        break
        case 'hight':
            alertmsg.textContent = "Errou! Chute foi alto, noon! 😤"
            alertmsg.classList.add('error');
        break
        case 'low':
            alertmsg.textContent = "Errou! Chute foi baixo, wow! 😫"
            alertmsg.classList.add('error');
        break
        default:
            alertmsg.textContent = 'Digite um número entre 1 e 10';
            alertmsg.classList.remove('accept');
            alertmsg.classList.remove('error');
            alertmsg.classList.add('alerta');
    }
}