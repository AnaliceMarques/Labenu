//Parte 1

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

/*O tipo de váriavel ficou undefined para ambas variavéis, porque até o momento eu não atribui um valor para elas*/

nome = prompt("Qual é o seu nome?")
idade = Number(prompt("Qual é a sua idade?"))

console.log(typeof nome)
console.log(typeof idade)

/*As duas variáveis passaram a ser do tipo string, porque o prompt só recebe o valor de string*/

console.log("Olá",nome+",","você tem",idade,"anos")

//Parte 2

let respostaA = prompt("Você gosta de futebol?")
let respostaB = prompt("Você vai assistir aos jogos da copa?")
let respostaC = prompt("Você acha que o Brasil vai ser hexa em 2022?")

console.log(respostaA)
console.log(respostaB)
console.log(respostaC)

const perguntaA = "Você gosta de futebol?"
respostaA = prompt(perguntaA)
const perguntaB = "Você vai assistir aos jogos da copa?"
respostaB = prompt(perguntaB)
const perguntaC = "Você acha que o Brasil vai ser hexa em 2022?"
respostaC = prompt(perguntaC)

console.log(perguntaA,"-",respostaA)
console.log(perguntaB,"-",respostaB)
console.log(perguntaC,"-",respostaC)

/*As variáveis de respostaA, respostaB e respostaC não aceitam ser declaradas como constante.*/