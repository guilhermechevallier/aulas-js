//desafio 06
document.write('<h1>Informações</h1>');

let lutador = 'Fedor Vladimirovich Emelianenk';
let nacionalidade = 'Russo';
let idade = '44';
let peso = 106;
let altura = 1.83;

document.write(`<p>Lutador: ${lutador}</p>`);
document.write(`<p>Nacionalidade: ${nacionalidade}</p>`);
document.write(`<p>Idade: ${idade} anos</p>`);
document.write(`<p>Peso: ${peso} Kg</p>`);
document.write(`<p>Altura: ${altura} m</p>`);

document.write('<h1>Frase do dia</h1>');

const dia = 18;
const mes = 1;
const ano = 2025;
const msg = 'Aquele que tem um poder, mas não sabe usar, jamais passará de um tolo.';
const autor = 'Atsuomi Kiyotaka';

document.write(`<p>${dia}/${mes}/${ano}</p>`);
document.write(`<p>${msg}</p>`);
document.write(`<p>${autor}</p>`);

document.write('<h1>Array de Meses do ano</h1>');
let meses = ['Janeiro', 'Fevereiro','Março'];
document.write(`<p>${meses[0]}, ${meses[1]}, ${meses[2]}, ...</p>`);

document.write('<h1>Objeto Jogo</h1>');
let game = {
    jogo: 'Minecraft',
    Desenvolvido: 'Markus "Notch"',
    ano: '17 de maio de 2009'
}
document.write(`<p>Jogo: ${game.jogo}</p>`);
document.write(`<p>Desenvolvido por: ${game.Desenvolvido}</p>`);
document.write(`<p>Ano de lançamento: ${game.ano}</p>`);