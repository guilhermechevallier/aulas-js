//sorteio de um dado

//selecao de elementos
let numSort = document.querySelector('#Dado');
let imgDado = document.querySelector('#imgDado');
let btnSort = document.querySelector('#sortear');
let sorteado = document.querySelector('#sorteado');
let dadoRoll = document.querySelector('#dadoRolando');

btnSort.addEventListener('click', function(){
    //adiconar animação;
    imgDado.classList.add('animar');
    sorteado.classList.add('aparecer');

    //add efeito sonoro
    dadoRoll.play();

    //ocultar botao de sortear;
    btnSort.style.display = 'none';

    //usar setTimeout() para executar acoes apos 1.75 segundo.
    setTimeout(function(){
        //armazenar o numero sorteado em uma variavel.
        numSort = getRadomInt(1,6);
        //dar console no numero sorteado.
        console.log(numSort);

        //definir atributo src com base no numero;
        imgDado.setAttribute('src', 'images/' + numSort + '.png');

        //escrever no paragrafo o numero sorteado;
        sorteado.textContent = numSort;

        //exibir o botao sortear;
        btnSort.style.display = 'inline-block';

        //retirar a animação;
        imgDado.classList.remove("animar");
        sorteado.classList.remove("aparecer");

    }, 1750);
})

//funcao que gera numero randomico inteiro;
//incluindo o minimo e o maximo;

const getRadomInt = (min, max) => {
    min = Math.ceil(min); // arrendonda para cima ceil = teto;
    max = Math.floor(max); //arredonda para baixo floor = piso;
    return Math.floor(Math.random()* (max - min + 1)) + min;    
}