function gerar(){
    let inicio = document.getElementById('cxInicio')
    let res = document.getElementById('seltab')

    if(inicio.value.length == 0){
        window.alert('Valor inválido!')
    }else{
        let i = Number(inicio.value)
        res.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option') 
            item.text = `${i} x ${c} = ${i * c} `
            item.value = `res${c}`
            res.appendChild(item)
        }
    }
}