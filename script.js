const numeros = document.querySelectorAll(".numero");

const visor = document.querySelector("#visor");

let primeiroNumero;

let segundoNumero;

let operador;

let porcentagemAtiva = false;


// NÚMEROS

numeros.forEach(function(numero) {

    numero.addEventListener("click", function() {

        visor.value += numero.textContent;

    });

});


// OPERADORES

const funcoes = document.querySelectorAll(".funcao");

funcoes.forEach(function(funcao) {

    funcao.addEventListener("click", function() {

        if (
            funcao.textContent === "+" ||
            funcao.textContent === "-" ||
            funcao.textContent === "X"
        ) {

            primeiroNumero = Number(visor.value.replace(",", "."));

            operador = funcao.textContent;

            visor.value = primeiroNumero + " " + operador + " ";

        }

    });

});


// DIVISÃO

const divisao = document.querySelector(".operador");

divisao.addEventListener("click", function() {

    primeiroNumero = Number(visor.value.replace(",", "."));

    operador = "/";

    visor.value = primeiroNumero + " " + operador + " ";

});


// IGUAL

const igual = document.querySelector(".igual");

igual.addEventListener("click", function() {

    const partes = visor.value.split(" ");

    primeiroNumero = Number(partes[0].replace(",", "."));

    segundoNumero = Number(partes[2].replace(",", "."));

    let resultado;

    if (operador === "+") {

        resultado = primeiroNumero + segundoNumero;

    } else if (operador === "-") {

        resultado = primeiroNumero - segundoNumero;

    } else if (operador === "X") {

        resultado = primeiroNumero * segundoNumero;

    } else if (operador === "/") {

        resultado = primeiroNumero / segundoNumero;

    }

    visor.value = resultado;

});


// AC - LIMPAR

const limpar = document.querySelector(".funcao");

limpar.addEventListener("click", function() {

    visor.value = "";

    primeiroNumero = undefined;

    segundoNumero = undefined;

    operador = undefined;

});


// APAGAR ÚLTIMO NÚMERO

const apagar = document.querySelectorAll(".funcao")[1];

apagar.addEventListener("click", function() {

    visor.value = visor.value.slice(0, -1);

});


// VÍRGULA DECIMAL

const virgula = document.querySelectorAll(".funcao")[6];

virgula.addEventListener("click", function() {

    if (!visor.value.includes(",")) {

        visor.value += ",";

    }

});


// POSITIVO / NEGATIVO

const positivoNegativo = document.querySelectorAll(".funcao")[7];

positivoNegativo.addEventListener("click", function() {

    visor.value = Number(visor.value.replace(",", ".")) * -1;

});


// PORCENTAGEM

const porcentagem = document.querySelectorAll(".funcao")[2];

porcentagem.addEventListener("click", function() {

    const valor = Number(visor.value.replace(",", "."));

    const resultado = primeiroNumero * valor / 100;

    visor.value = resultado;

    porcentagemAtiva = true;

});