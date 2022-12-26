var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;
  switch (choice){
    case 'black':
        update('black','white');
        break;
    case 'white':
        update('white','black');
        break;
    case 'purple':
        update('purple','white');
        break;
    case 'yellow':
        update('wellow','darkgrey');
    case 'psychedelic':
        update('lime','purple');
        break;
  }    
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}



/*
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;
  let days = 31;
  if(choice === 'fevereiro'){
    days = 28;
  } else if(choice === 'abril' || choice === 'junho' || choice === 'setembro' || choice === 'novembro'){
    days = 30
  }
createCalendar(days, choice)
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'Janeiro');
*/

/*
let select = document.querySelector('select');
let html = document.querySelector('html');

function updated(bgcolor, txtcolor){
    html.style.backgroundColor = bgcolor;
    html.style.color = txtcolor;
}

select.onchange = function(){
    (select.value === 'black') ? updated('black','white') :
    updated('white','black');
}
*/


/*
function multi(num1, num2){
    let result = num1 * num2;
    return result;
};

console.log(multi(20, 20));
*/

/*
document.querySelector('h1').addEventListener("click", function(event){
    event.target.innerHTML = 'Total de cliques ' + event.detail;
}, false);
*/

/*
document.querySelector("html").addEventListener("click", () =>{
    alert("Ainnnnnnnnnn! Pare de me cutucar!");
});
*/

/*
var button = document.querySelector('button');
button.onclick = function(){
    var nome = prompt('Qual é o seu nome? ');
    alert(`Olá ${nome} é um prazer te ver!`);
}
*/

/*
var button = document.querySelector("button");
button.onclick = function(){
    let nome = prompt("Qual é o seu nome? ")
    let idade = prompt("Qual é a sua idade? ")
    alert(`Olá ${nome}, você tem ${idade} anos. `)
} 
*/

/*
let meuNomeArray = ['Chris', 'bob', 'Jim'];
let meuNumeroArray = [10, 15, 40];

console.log(meuNomeArray[0]);
console.log(meuNumeroArray[2]);
*/

/*
let cachorro = {nome: 'totó', raca: 'dálmata'};
console.log(cachorro.nome);
*/

/*
let meuNumero = '500';
console.log(typeof(meuNumero))
meuNumero = 500;
console.log(typeof(meuNumero))
*/

/* erro , variavel const não pode ser reescrita
const diasNaSemana = 7;
diasNaSemana = 8;
const horasNoDia = 24;
*/

/*
const myInt = 5;
const myFloat = 6.667;
console.log(typeof(myInt));
console.log(typeof(myFloat));
*/

/*
const lostOfDecimal = 1.766584958675746364;
console.log(lostOfDecimal);
const twoDecimalPlaces = lostOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);*/

// console.log(browserType.length-1);

/*
const browserType = 'mozilla';
console.log(browserType.slice(3,5))
/*
if(browserType.endsWith('zilla')){
    console.log('Found zilla!');
}else{
    console.log("No zilla here!")
}
*/

/*
const browserType = 'mozilla';
const updated = browserType.replace('moz','van');
console.log(updated);
*/

/*
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping.length);
*/

/*
const random = ['tree', 795, [0, 4, 2]];
console.log(random[2][1]);
*/

/*
const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));   //  2
console.log(birds.indexOf('Rabbit')); // -1
*/

/*
const cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push('Bradford', 'Brighton');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
*/

/*
const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]
*/

/*
const data = 'Manchester, London, Liverpool, Birmingham, Leeds, Carlisle';
const cities = data.split(',');
console.log(cities)

const commaSeparated = cities.join('.');
console.log(commaSeparated);
*/

/*
const dogNames = ['Rocket','Flash','Bella','Slugger'];
console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger
*/

/*
// number 1
let products = [
    'Underpants:6.99'
    'Socks:5.99'
    'T-shirt:14.99'
    'Trousers:31.99'
    'Shoes:23.99';
];
// number 2
for(let product of products){
// number 3
let subArray = product.split(":");
let name = subArray[0]
let price = Number(subArray[1]);
// number 4

// number 5
total += price;
let itemText = `${name} - ${price}`;
}
*/


