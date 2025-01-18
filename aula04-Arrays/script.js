// Sobre Arrrays

let produtos = ['Arroz','Feijão','Maçã'];
let codigos = Array(10, 20, 30);
let meses = ['Jan', 'Fev', 'Mar', 'Abr']

for (let i = 0; i < 3; i++){
    console.log(produtos[i]);
}

// Adicionar no final push = empurre;
produtos.push('Açúcar');
codigos.push(15, 50, 60, 70);
meses.push('mai', 'jun', 'jul', '07');

// Remover o ultimo pop() = estourar;
produtos.pop();

// Adicionar no inicio unshift();
produtos.unshift('Uva', 'Pera');

// Remove no inicio shift();
produtos.shift();

// Remover de uma posicao especifica;
// splice(posicao inicial, quantos remover);
let numberbox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numberbox.splice(0, 5);
console.log(numberbox);

// Copiar todo ou de uma posição especifica;
// slice(posicao, quantos vai copiar);
// box.slice(2,4);

let box = [10, 20, 30, 40, 50];
let box1 = box.slice();
console.log(box1);

let box2 = box.slice(0,3);
console.log(box2);

// Propriedade Length excliso para Arrays que serve para verificar o tamanho de um array;
// produtos.length;

//spreed é uma copia também, mas pode se fazer uma adicao de outros novos elementos;
//box ira receber uma copia de todos os elementos de produtos;
// box = [...produtos];
let box3 = [...box, 'ovo', 'maçã'];
console.log(box3);
