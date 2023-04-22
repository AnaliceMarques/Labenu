// if aninhados
const idadeDependente = 15

// CONDIÇÕES
// idadeDependente >= 13
// idadeDependente <= 17

if (idadeDependente >= 13) {
    if (idadeDependente <= 17) {
        console.log("Pode ter o cartão de dependente")
    } else {
        console.log("o limite de idade é 17 anos")
    }
} else {
    console.log("Para ter o cartão, o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank")
}

// usando operadores lógicos
if (idadeDependente >= 13 && idadeDependente <= 17) {
    console.log("Pode ter o cartão de dependente")
    idadeDependente === 13 ? console.log("13 anos") : console.log("não tem 13 anos")
} else {
    console.log("Para ter o cartão, o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank")
}


// ternário
// exemplo
const chuva = true

// chuva é true ? o que acontece se sim : o que acontece se não
chuva ? console.log("leva sombrinha") : console.log("pode deixar a sombrinha")

// exercício ternário
(idadeDependente >= 13 && idadeDependente <= 17) ? console.log("pode ter cartão") : console.log("consulte outras opções")

// Switch-case
const escolhaUsuario = Number(prompt("digite um numero de 1 a 4 para escolher o cartão"))
// declarei a variável cartão para atribuir a ela o valor definido no switch case
let cartao
switch (escolhaUsuario) {
    case 1:
        cartao = "Fácil"
        break
    case 2:
        cartao = "Black"
        break
    case 3:
        cartao = "Platinum"
        break
    case 4:
        cartao = "master gold"
        break
    default:
        console.log("Escolha umas das quatro opções disponíveis")
        break
}
console.log("Cartão", cartao)