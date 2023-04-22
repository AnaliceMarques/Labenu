
function pratica2(num) {
    const verifica = num % 2 === 0
    const soma = num + 10
    const multiplica = num * num

    return `O número ${num} é par? ${verifica}
Somado 10 o resultado é ${soma} e
Multiplicado por ele mesmo é ${multiplica}
    `
}

const numInformado = Number(prompt("Informe um número"))
console.log(pratica2(numInformado))