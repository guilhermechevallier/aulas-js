///*lacos de repeticao*/

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

const obj = {
    name: "guilherme",
    age: 20,
}

obj.name = "Anatoshi";
obj.age = "20";

const {name, age} = obj;
console.log(name, age);


//padStart ou padEnd e um preenchimento.
const number = '123456';
console.log(number.padStart(10, '0'));

/*
    Object.value e Object.entries;
*/

let fruit = {
    fruit1: 'Apple',
    fruit2: 'Watermelon',
    fruit3: 'Stranberry'
}
/*
    para se percorrer por toda a estrura de um array ou objeto era necessario usar uma estrutura de repeticao, mas com as novas versoes do ecma isso nao e necessario.
*/

// Object.keys(fruit).forEach((key, index) => {
//     console.log(key, fruit[key]);
// })

Object.values(fruit).forEach(value => {
    console.log(value);
})