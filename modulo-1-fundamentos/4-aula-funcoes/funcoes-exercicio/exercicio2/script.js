
/*
Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
*/

function soma(num1,num2) {
    const calcSoma = num1 + num2
    
    console.log(`O resuldado da soma de ${num1} com ${num2} é ${calcSoma}`)
}

soma(2,4)

/*
b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
*/

function maiorOuIgual (num1,num2) {
    const verifica = num1 >= num2

    console.log(`O número ${num1} é maior ou igual ao número ${num2}? ${verifica}`)
}

maiorOuIgual(7,10)
maiorOuIgual(25,3)
maiorOuIgual(32,32)

/*
c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.
*/

function verParidade(num) {
    console.log(`O número ${num} é par? ${num % 2 === 0}`)
}

verParidade(10)
verParidade(15)

/*
d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.
*/

function salarioComInss (salario) {
    const inss = 0.10
    
    return salario * (1-inss)
}

console.log(salarioComInss(1000))

console.log("Estou em uma linha \n Estou em outra linha")

console.log(`Agora a quebra \n
usando a crase \n
que nem é necessário`)

console.log(`Conforme posso observar
nesse texto aqui`)