console.log("Operadores")

//Prática Guiada 1

let saldo

saldo = 15

saldo = saldo + 22.40
console.log("Com esse acréssimo, agora tenho:"+saldo)

saldo = saldo - 12.34
console.log("Com o gasto que tive, fiquei com:"+saldo)

saldo = saldo / 3
console.log("Quando dividi, fiquei com:"+saldo)

saldo = saldo * 3.42
console.log("Com o investimento fiquei com:"+saldo)


let resto
resto = saldo % 3
console.log("O resto para comprar o cliclete é:"+saldo)

saldo = (saldo - resto) / 3
console.log("Cada conta ficou com:"+saldo)

/*saldo = saldo % 3
 é como se dividisse por 3, subtraisse o número interio (antes da vírgula), e depois multiplicasse por 3, para ter o valor do resto */


//Prática Guiada 2

let resultado1 = 5 === 5
console.log(resultado1)

let resultado2 = 5 !== 5
console.log("5 === 5 :",resultado2)

let resultado3 = 5 !== "5"
console.log("5 !== \"5\" :",resultado3)
console.log(`5 !== "5" : ${resultado3}`)

//Para usar aspas dentro das aspas, pode fazer com \" \" (mas não deve)ou pelo template de string (crase ${var})

let resultado4 = "5" === "cinco"
console.log("\"5\" === \"cinco\"",resultado4)

let resultado5 = typeof 5 === typeof 20
console.log("typeof 5 === typeof 20",resultado5)

let resultado6 = typeof "5" === typeof "cinco"
console.log("typeof \"5\" === typeof \"cinco\"",resultado6)

//O uso de == é para saber se o conteúdo é igual, enquanto === é para saber se o conteúdo e o tipo é igual

let resultado7 = "10" == "dez" //vai ser False
console.log("\"10\" == \"dez\" :",resultado7)

let resultado8 = "10" == 10 //vai ser True
console.log("\"10\" == 10",resultado8)

let resultado9 = "10" === 10 //vai ser False
console.log("\"10\" === 10",resultado8)




//Exercício para Fixar - Parte 1

let idade = Number(prompt("Qual a sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

let compararIdade = idade > idadeMelhorAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?",compararIdade)

let diferencaIdade = idade - idadeMelhorAmigo

console.log("A diferença de idade é de", diferencaIdade, "anos.")


//Exercício para Fixar - Parte 2

//Todas as afirmações abaixo serão consideradas verdadeiras

let praia = "vou para a praia!"
let maiorIdade = "sou maior de idade"
let beberCerveja = "posso tomar uma cervejinha"
let passearDeCarro = "quero passear de carro"


//afirmacao1 = Não sou maior de idade e quero passear de carro.
console.log(!maiorIdade && passearDeCarro)

//afirmacao2 = Sou maior de idade e vou para a prais, e não quero passear de carro.
console.log((maiorIdade && praia) && !passearDeCarro)

//afirmacao3 = Vou para a praia ou quero passear de carro.
console.log(!praia || passearDeCarro) 
//O OU, está retornando apenas vou para a praia! que é o primeiro valor verdadeiro, se eu negar o primeiro ele retorna o segundo.

//afirmacao4 = Posso tomar uma cervejinha e não vou passear de carro.
console.log(beberCerveja && !passearDeCarro)