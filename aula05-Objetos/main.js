//aula sobre objetos

/*
    estrutura padrao de um objeto:
    let nomedoObjeto = {
        propriedade : valor (string, number, boolean etc),
        nome: 'Ester',
        idade: '20'
    }
*/
let pessoa = {
    nome: 'guilherme',
    idade: 20,
    peso: 67.8,
    altura:  1.83,
    doador: false,
}
console.log(pessoa.nome);

let produtos = {
    descricao : [],
    preco : []
}

let carros = {
    marca : ['Ford', 'Fiat', 'Gm'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010]
}

/* para acessar uma propriedade especifica do objeto. duas formas;
    objeto.propriedade = usando o .
    objeto['propriedade'] = usando o [''] 

    carros.marca
    carros['marca']
*/

//fazendo uso dos valores das propriedades dos objetos
// imc = peso / (altura * altura);
let imc = pessoa.peso / (pessoa.altura * pessoa.altura);
console.log(imc);

//para limitar o numero de casas decimais .toFixed(x) x para a quantidade de casas decimais;
console.log(`O calculo de IMC ${imc.toFixed(2)}`);

//atualizar/alterar o valor de uma propriedade de um objeto;
//se o objeto tiver somente uma propriedade tudo bem fazer a alteracao desta forma;
pessoa.nome = 'Guilherme Silva';

//se as propriedades do objeto for um array, e se fizer desta maneira o array inteiro sera limpo;
// por isso deve especificar em que posicao fazer esta alteracao;
produtos.descricao = ['Arroz'];
produtos.preco = [27.99];

produtos.descricao = [...produtos.descricao, 'Feijão'];
produtos.preco = [...produtos.preco, 9.99];
/*  
    ao fizer desta forma em uma propriedade que seja um array, ela ira apagar tudo e colocar o novo valor.
    para que isso nao ocorra devemos fazer uma copia e entao adicionar.
    
    carros.marcas = [...carros.marca, 'Lexus'];
    Carros.marcas recebe uma copia e a adicao de lexus a propriedade
*/
carros.marca = [...carros.marca, 'Lexus'];

let valor = 220.99
document.write(`Preço: ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <hr>`)
