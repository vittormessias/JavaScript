function parimpar(n){
    if(n%2==0){
        return `Par!`
    }else{
        return `Impar!`
    }
}

// com variavel
let res = parimpar(4)
console.log(res)

console.log(`----------`)

// sem variavel
console.log(parimpar(4))
