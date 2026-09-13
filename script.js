const numeros = document.querySelectorAll(".numero");

const visor = document.querySelector("#visor");

let primeiroNumero;
let segundoNumero;
let operador;


// ====================
// NÚMEROS
// ====================

numeros.forEach(function(numero) {

    numero.addEventListener("click", function() {

        visor.value += numero.textContent;

    });

});


// ====================
// FUNÇÃO PARA CALCULAR
// ====================

function calcular() {

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

    return resultado;

}


// ====================
// OPERADORES + - X
// ====================

const funcoes = document.querySelectorAll(".funcao");

funcoes.forEach(function(funcao) {

    funcao.addEventListener("click", function() {

        if (
            funcao.textContent === "+" ||
            funcao.textContent === "-" ||
            funcao.textContent === "X"
        ) {

            // Se já existe uma operação no visor,
            // calcula antes de começar a próxima

            if (
                operador !== undefined &&
                visor.value.includes(" ")
            ) {

                const resultado = calcular();

                primeiroNumero = resultado;

            } else {

                primeiroNumero = Number(
                    visor.value.replace(",", ".")
                );

            }

            // Guarda o novo operador

            operador = funcao.textContent;

            // Mostra o número e o operador no visor

            visor.value = primeiroNumero + " " + operador + " ";

        }

    });

});


// ====================
// DIVISÃO
// ====================

const divisao = document.querySelector(".operador");

divisao.addEventListener("click", function() {

    // Se já existe uma operação,
    // calcula antes de começar a divisão

    if (
        operador !== undefined &&
        visor.value.includes(" ")
    ) {

        const resultado = calcular();

        primeiroNumero = resultado;

    } else {

        primeiroNumero = Number(
            visor.value.replace(",", ".")
        );

    }

    operador = "/";

    visor.value = primeiroNumero + " " + operador + " ";

});


// ====================
// IGUAL
// ====================

const igual = document.querySelector(".igual");

igual.addEventListener("click", function() {

    // Só calcula se existir um operador

    if (
        operador !== undefined &&
        visor.value.includes(" ")
    ) {

        const resultado = calcular();

        visor.value = resultado;

        primeiroNumero = resultado;

        operador = undefined;

    }

});


// ====================
// AC - LIMPAR
// ====================

const limpar = document.querySelector(".funcao");

limpar.addEventListener("click", function() {

    visor.value = "";

    primeiroNumero = undefined;

    segundoNumero = undefined;

    operador = undefined;

});


// ====================
// APAGAR ÚLTIMO NÚMERO
// ====================

const apagar = document.querySelectorAll(".funcao")[1];

apagar.addEventListener("click", function() {

    visor.value = visor.value.slice(0, -1);

});


// ====================
// PORCENTAGEM
// ====================

const porcentagem = document.querySelectorAll(".funcao")[2];

porcentagem.addEventListener("click", function() {

    const partes = visor.value.split(" ");

    primeiroNumero = Number(
        partes[0].replace(",", ".")
    );

    operador = partes[1];

    const valor = Number(
        partes[2].replace(",", ".")
    );

    const resultado = primeiroNumero * valor / 100;

    visor.value =
        primeiroNumero + " " + operador + " " + resultado;

});


// ====================
// VÍRGULA DECIMAL
// ====================

const virgula = document.querySelectorAll(".funcao")[6];

virgula.addEventListener("click", function() {

    // Se o visor estiver vazio

    if (visor.value === "") {

        visor.value = "0,";

    } else {

        visor.value += ",";

    }

});


// ====================
// POSITIVO / NEGATIVO
// ====================

const positivoNegativo = document.querySelectorAll(".funcao")[7];

positivoNegativo.addEventListener("click", function() {

    visor.value =
        Number(visor.value.replace(",", ".")) * -1;

});
