function contar(){
    let inicio = document.getElementById('cxInicio')
    let fim = document.getElementById('cxFim')
    let passo = document.getElementById('cxPasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Faltam dados!')
    }else{
        res.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo = 0')
        }

        if(i< f){
            // Contagem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} `
            }
        }else{
            // Contagem Decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} `
            }
        }
    }    
}