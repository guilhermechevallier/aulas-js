//codificacao em js;

//selecao de entrada de dados
let note1 = document.querySelector('#prova1');
let note2 = document.querySelector('#prova2');
let note3 = document.querySelector('#prova3');
let note4 = document.querySelector('#prova4');

//selecao de acoes de envio e limpeza dos valores de entrada
let submited = document.querySelector('#enviar');
let limp = document.querySelector('#limpar');

//selecao das saidas media e situcao
let sitMedia = document.querySelector('#media');
let solveresult = document.querySelector('#resultado');

limp.addEventListener('click', function(){
    note1.value = '';
    note2.value = '';
    note3.value = '';
    note4.value = '';
    
    sitMedia.value = '0.00 média';
    solveresult.value = 'situacao';
    solveresult.classList = "resultado";
})

submited.addEventListener('click', function(e){
    //pegando os valores de entrada;
    let resul1 = Number(note1.value);
    let resul2 = Number(note2.value);
    let resul3 = Number(note3.value);
    let resul4 = Number(note4.value);

    //verificao do registro de valores nas variaveis;
    console.log(resul1);
    console.log(resul2);
    console.log(resul3);
    console.log(resul4);

    //calculo de media aritmetica basica;
    let middle = ((resul1 + resul2 + resul3 + resul4) / 4).toFixed(1);
    console.log(middle);

    /*o input de saida media recebera o valor do calculo de media;*/
    sitMedia.value = `${middle}`;

    //estrutura condicional para a validacao de aprovacao ou reprovação;
    let situation = ''
    if (middle > 0 && middle < 5){
        situation = 'reprovado';
        solveresult.classList = "reprovado";
    }else if (middle >= 5 && middle < 7){
        situation = 'Recuperação';
        solveresult.classList = "recuperacao";
    }else if (middle >= 7 && middle <= 10){
        situation = 'Aprovado';
        solveresult.classList = "aprovado";
    }else{
        situation = 'Informe a nota corretamente!';
        solveresult.classList = "resultado";
        sitMedia.value = '-- --'
    }
    
    solveresult.value = situation;

    
    e.preventDefault()
})