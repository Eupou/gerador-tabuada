function carregar(){ 
    var fnumero = document.getElementById('number')
    var vezes1 = document.getElementById('vezes1')
    var vezes2 = document.getElementById('vezes2')
    var vezes3 = document.getElementById('vezes3')
    var vezes4 = document.getElementById('vezes4')
    var vezes5 = document.getElementById('vezes5')
    var vezes6 = document.getElementById('vezes6')
    var vezes7 = document.getElementById('vezes7')
    var vezes8 = document.getElementById('vezes8')
    var vezes9 = document.getElementById('vezes9')
    var vezes10 = document.getElementById('vezes10')
    
    var numero = Number(fnumero.value)
    var resultado = []
    var x = 1
    var c = numero * x

    while(x < 11) {
        c = numero * x
        resultado.push(c)
        x++
    }

    vezes1.innerHTML = `${numero} x 1 = ${resultado[0]}`
    vezes2.innerHTML = `${numero} x 2 = ${resultado[1]}`
    vezes3.innerHTML = `${numero} x 3 = ${resultado[2]}`
    vezes4.innerHTML = `${numero} x 4 = ${resultado[3]}`
    vezes5.innerHTML = `${numero} x 5 = ${resultado[4]}`
    vezes6.innerHTML = `${numero} x 6 = ${resultado[5]}`
    vezes7.innerHTML = `${numero} x 7 = ${resultado[6]}`
    vezes8.innerHTML = `${numero} x 8 = ${resultado[7]}`
    vezes9.innerHTML = `${numero} x 9 = ${resultado[8]}`
    vezes10.innerHTML = `${numero} x 10 = ${resultado[9]}`

}

