let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100 ) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n) != -1))
        return true
    else
        return false 
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let maior = Math.max.apply(null, vetor)
    let menor = Math.min.apply(null, vetor)
    let soma = 0
    
    if (valores.length == 0) {
        window.alert('Adicione ao menos um valor antes de iniciar!')
        num.focus()
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>temos ${tot} números cadastrados ao todo</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media}.</p>`
    }
}
