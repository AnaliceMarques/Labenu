
console.log("Funções")

//Dentro de ${ }, entre crasws, só podemos colocar expressões
//Expressão é qualquer coisa que gera um valor final
//Uma dica: é expressão se entra dentro de um console.log()


function pratica1Normal (nome) {
    console.log(`Olá ${nome}`)
}

const pratica1Arrow = (nome) => {
    console.log(`Olá ${nome}`)
}


const pratica1ArrowAbreviada = (nome) => console.log(`Olá ${nome}`) //Como tem só um parâmetro poderia tirar os parenteses, mas o ideal é deixar.


pratica1Normal("João")
pratica1Arrow("Maria")
pratica1ArrowAbreviada("Ciclano")


const pratica1ComReturn = (nome) => {
    return `Olá ${nome}`
}

console.log(pratica1ComReturn("Teste"))


//Se uma função não tem return, ela retorna undefined
/*
function bananinha(){

}

console.log(bananinha()) //retornou undefined

bananinha() //é undefined, mas não mostra no console


function bananinha(){
    return "Bananinha é daora" 
}

console.log(bananinha())  //vai retornar sempre a mesma frase

*/

function bananinha(param){
    return `Bananinha é daora ${param}` //para trazer dinamicidade a função eu acrescento um parametro e tenho que usar o template string do JS (uso de crade e ${}) 
}

console.log(bananinha("sim")) 


const pratica1FuncaoNaoNomeada = function (nome) {
    console.log(`Olá ${nome}`)

}

pratica1FuncaoNaoNomeada("Analice")
pratica1FuncaoNaoNomeada("Marques")
pratica1FuncaoNaoNomeada("Lima")

//A diferença da Função Nomeada para o Arrow Function, é que no Arrow não precisa colocar "function" e acrescenta "=>" 