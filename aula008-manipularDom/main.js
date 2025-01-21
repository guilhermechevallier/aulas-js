//manipulação de dom;

let titu1 = document.getElementById('titulo');
let titusub1 = document.querySelector('#titulo1');

let boxer = document.querySelectorAll('.texto');

let printer = () =>{
    for (let i = 0; i < boxer.length; i++){
        console.log(boxer[i]);
    }
}
console.log(printer());

    