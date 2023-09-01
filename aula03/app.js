'use strict'

const button = document.getElementById('somar')
const buttonIdent = document.getElementById('ident')
const botaoMedia = document.getElementById('media')
const botaoSomar3 = document.getElementById('somar3')
const botaoVerificar = document.getElementById('verificar')

function somar () {
    const numeroUm = Number(document.getElementById('n1').value)
    const numeroDois = Number(document.getElementById('n2').value)
    const resultado1 = document.getElementById('resultado1')
    const soma = numeroUm + numeroDois

    resultado1.textContent = soma
}button.addEventListener('click', somar)

function identificar () {
    const numeroItem2 = Number(document.getElementById('numberit2').value)
    const positivoOuNegativo = document.getElementById('identPosNeg')

    if (numeroItem2 > 0 ){
        positivoOuNegativo.textContent = 'Positivo'
    }else if(numeroItem2 < 0){
        positivoOuNegativo.textContent = 'Negativo'
    }else {
        positivoOuNegativo.textContent = 'Zero'
    }   
}buttonIdent.addEventListener('click', identificar)

function Media () {

    const nota1 = Number(document.getElementById('nota-1').value)
    const nota2 = Number(document.getElementById('nota-2').value)
    const nota3 = Number(document.getElementById('nota-3').value)
    const nota4 = Number(document.getElementById('nota-4').value)

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){

        alert(`Sua média é ${media}. Parabéns, você foi aprovado!`)

    } else {
        let notaExame = prompt(`Sua média é ${media}. Insira sua nota de exame`)
        const media2 = (media + Number(notaExame)) / 2
        
        if (media2 >= 5){
            alert(`Sua nova média é ${media2}. Aprovado em exame`)
        }else{
            alert(`Sua nova média é ${media2}. Você foi reprovado`)
        }
    }
}botaoMedia.addEventListener('click', Media)

function somarTresValores () {
    const valor1 = Number(document.getElementById('valor1').value)
    const valor2 = Number(document.getElementById('valor2').value)
    const valor3 = Number(document.getElementById('valor3').value)
    const resultado3 = document.getElementById('somar-3-valores')
    const soma3 = valor1 + valor2 + valor3

    if(soma3 >= 100){
        resultado3.textContent = soma3   
    }else {
        resultado3.textContent = 'Seu total não é maior que 100'
    }
}botaoSomar3.addEventListener('click', somarTresValores)

function verificarMultiplos() {
    const numeroNove = Number(document.getElementById('n9').value)
    const numeroDez = Number(document.getElementById('n10').value)
    const numeroOnze = Number(document.getElementById('n11').value)
    const numeroDoze = Number(document.getElementById('n12').value)
    const resultadoMultiplos = document.getElementById('multiplos')

    let aux = ''

    if (numeroNove % 2 == 0 || numeroNove % 3 == 0){  
        aux = numeroNove
    }
    if (numeroDez % 2 == 0 || numeroDez % 3 == 0){
        aux = `${aux} - ${numeroDez}`
    }
    if (numeroOnze % 2 == 0 || numeroOnze % 3 == 0){  
        aux = `${aux} - ${numeroOnze}`
    }
    if (numeroDoze % 2 == 0 || numeroDoze % 3 == 0){  
        aux = `${aux} - ${numeroDoze}`
    }
    resultadoMultiplos.textContent = aux
}botaoVerificar.addEventListener('click', verificarMultiplos)