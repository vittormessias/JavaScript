let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4, 
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

let n = 1543.5
console.log( n.toFixed('pt-BR', {style:'currency', currency:'BRL'}))
