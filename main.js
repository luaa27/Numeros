'use strict';

const botaoMostarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros');
const botaoMostarTodosPares = document.getElementById('botao-mostrar-numeros-pares');
const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro');
const botaoMostarTodosMultiplos3e5 = document.getElementById('botao-mostrar-numeros-multiplos3e5');
const botaoMostarTodosMultiplicar3ou5 = document.getElementById('botao-mostrar-numeros-multiplicar3ou5');
const botaoMostrarProximoNumeroPar = document.getElementById('botao-mostrar-proximo-numero-par');
const botaoMostarTodosAnteriorImpar = document.getElementById('botao-mostrar-numeros-anterior-impar');
const botaoMostarTodosMultiplicar3 = document.getElementById('botao-mostrar-numeros-triplo');
const botaoMostarTodosPrimos = document.getElementById('botao-mostrar-numeros-primos');

function mostrarTodosNumeros() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-todos-numeros');
    container.replaceChildren();
    const ultimoIndice = numeros.length;

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = numeros[contador];
            container.appendChild(novoSpan);
        }
    }
}

function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-numeros-pares');
    container.replaceChildren();
    const ultimoIndice = numeros.length;

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 2 == 0) {
                const novoSpan = document.createElement('span');
                novoSpan.textContent = numeros[contador];
                container.appendChild(novoSpan);
            }
        }
    }
}

function mostrarDobro() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-dobro');
    container.replaceChildren();
    const ultimoIndice = numeros.length;

    for (let indice = 0; indice < ultimoIndice; indice++) {
        const novoSpan = document.createElement('span');
        novoSpan.textContent = Number(numeros[indice]) * 2;
        container.appendChild(novoSpan);
    }
}

function mostrarMultiplos3e5() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-numeros-multipos3e5');
    container.replaceChildren();
    const ultimoIndice = numeros.length;

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 3 == 0 && numeros[contador] % 5 == 0) {
                const novoSpan = document.createElement('span');
                novoSpan.textContent = numeros[contador];
                container.appendChild(novoSpan);
            }
        }
    }
}

function mostrarMultiplos3Ou5() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-numeros-multiplicar3ou5');
    container.replaceChildren();
    const ultimoIndice = numeros.length;

    for (let indice = 0; indice < ultimoIndice; indice++) {
        if (numeros[indice] % 3 == 0 || numeros[indice] % 5 == 0) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = numeros[indice];
            container.appendChild(novoSpan);
        }
    }
}

function mostrarProximoNumeroPar() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-proximo-numero-par');
    container.replaceChildren();
    const ultimoIndice = numeros.length;

    for (let indice = 0; indice < ultimoIndice; indice++) {
        if (numeros[indice] % 2 == 0) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = Number(numeros[indice]) + 2;
            container.appendChild(novoSpan);
        } else {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = Number(numeros[indice]) + 1;
            container.appendChild(novoSpan);
        }
    }
}

function mostrarTodosAnteriorImpar() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-numeros-anteriores-impar');
    container.replaceChildren();
    const ultimoIndice = numeros.length;

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = numeros[contador] - 1;
            if (numeros[contador] % 2 == 0) {
                container.appendChild(novoSpan);
            }
        }
    }
}

function isPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function mostrarNumerosPrimos() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-numeros-primos');
    container.replaceChildren();

    for (let i = 0; i < numeros.length; i++) {
        const numero = parseInt(numeros[i]);
        if (isPrimo(numero)) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = numero;
            container.appendChild(novoSpan);
        }
    }
}

botaoMostarTodosNumeros.addEventListener('click', mostrarTodosNumeros);
botaoMostarTodosPares.addEventListener('click', mostrarNumerosPares);
botaoMostrarDobro.addEventListener('click', mostrarDobro);
botaoMostarTodosMultiplos3e5.addEventListener('click', mostrarMultiplos3e5);
botaoMostrarProximoNumeroPar.addEventListener('click', mostrarProximoNumeroPar);
botaoMostarTodosAnteriorImpar.addEventListener('click', mostrarTodosAnteriorImpar);
botaoMostarTodosMultiplicar3ou5.addEventListener('click', mostrarMultiplos3Ou5);
botaoMostarTodosPrimos.addEventListener('click', mostrarNumerosPrimos);