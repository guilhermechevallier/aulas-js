// get form

let btn = document.querySelector('#envData');

btn.addEventListener('click', function(){
    const x = document.forms['frm1'];
    let text = '';
    
    for (let i = 0; i < x.length; i++){
        text += `<p> ${x.elements[i].value}</p>`
    }
    document.getElementById("infor").innerHTML = text;
})


/*lacos de repeticao*/

//objeto pessoa com array
const people = [
    {
        name: "guilherme",
        phone: "023948475243"
    },
    {
        name: "Ester",
        phone: "204938502849"
    }
]

//for com 3 argumentos
/*
    1. variavel de controle
    2. condicao
    3. incremento
*/
for (let index = 0; index <= people.length-1; index++){
    console.log(people[index].name);
}
//existem outros for tbm como o for in e o for off;

//for off;
for (let person of people){
    console.log(person.name);
}

//for in iterando uma propriedade;

for (const person of people){
    for (const prop in person){
        console.log('pop - value: ', person[prop]);
    }
}