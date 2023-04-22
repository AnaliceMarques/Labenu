/*
console.log ("Olá Mundo!")

const nome = "Analice Marques"

console.log(nome)
//console.log("imprimindo um valor")
let idade = 28

console.log(idade)

idade = 28.20

console.log(idade)
console.log(idade.toFixed(2))

console.log("Olá Mundo, meu nome é",nome,"e tenho",idade, "anos.")

let petCheck

// petCheck = prompt("Você tem pet?")
// console.log(petCheck)

petCheck = confirm("Você tem pet?")
console.log(petCheck)

const nomeDoPet = prompt("Qual o nome do seu pet?")
console.log(nomeDoPet)

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof petCheck)
console.log(typeof nomeDoPet)
*/

/* Prompt recebe apenas string, mostrando a diferença e convertendo para número

let money = prompt ("Quanto você tem de dinhereiro agora?")

let resposta = money +10
console.log(resposta)

money = Number (prompt ("Quanto você tem de dinhereiro agora?"))
resposta = money +10
console.log(resposta)
*/


/* Convertendo idade para número e depois para texto

const nome = prompt("Qual é o seu nome?")
let idade = Number(prompt("Qual é a sua idade?"))

console.log(typeof nome)
console.log(typeof idade)

console.log(typeof idade.toString())
*/

//Exercício de Fixação 1
//Objeto = Boneca

const nomeDaBoneca = "clara"
let idadeDaBoneca
let falaDaBoneca

//Não consigo declarar a váriavel const sem atribuir o valor dela na mesma linha

idadeDaBoneca = 1
falaDaBoneca = true

console.log(nomeDaBoneca)
console.log(idadeDaBoneca)
console.log(falaDaBoneca)

console.log(typeof nomeDaBoneca)
console.log(typeof idadeDaBoneca)
console.log(typeof falaDaBoneca)

console.log("Minha boneca se chama",nomeDaBoneca,"ela tem",idadeDaBoneca,"ano(s), e é",falaDaBoneca,"que ela consegue falar.")

//Exercício de Fixação 2

let a
let b

a=2
b=3

let c

c=a
a=b
b=c

console.log(a)
console.log(b)