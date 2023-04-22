/*
a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
*/

const soma = (num1,num2) => {
    const calcSoma = num1 + num2

    return calcSoma
}

const subtracao = (num1,num2) => {
    const calcSub = num1 - num2

    return calcSub
}

const multiplicacao = (num1,num2) => {
    const calcMult = num1 * num2

    return calcMult
}

const divisao = (num1,num2) => {
    const calcDiv = num1 / num2

    return calcDiv
}


/*
b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
*/

const numero1 = Number(prompt(`Insira um número:`))
const numero2 = Number(prompt(`Insira outro número:`))


/*
c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
*/


// soma(numero1,numero2)
// subtracao(numero1,numero2)
// multiplicacao(numero1,numero2)
// divisao(numero1,numero2)


/*
d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
*/

const resultadoSoma = soma(numero1,numero2)
console.log(`A soma de ${numero1} e ${numero2} é ${resultadoSoma}`)

const resultadoSub = subtracao(numero1,numero2)
console.log(`A subtração de ${numero1} por ${numero2} é ${resultadoSub}`)

const resultadoMult = multiplicacao(numero1,numero2)
console.log(`A multiplicação de ${numero1} por ${numero2} é ${resultadoMult}`)

const resultadoDiv = divisao(numero1,numero2)
console.log(`A divisão de ${numero1} por ${numero2} é ${resultadoDiv}`)

