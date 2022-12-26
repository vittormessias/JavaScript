let num = [5, 8, 2, 9, 3]

// adiciona valores na posição especificada
//num[3] = 6

// metodo que adiciona valores no final
num.push(1)

// atributo que diz quantos elementos tem no comprimento do vetor
//num.length

// metodo que poem o elementos em ordem crescente
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// procura aonde está o valor indicado e mostra a posição
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}

