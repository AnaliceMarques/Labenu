//Função utilizando declaração de função normal

function olaNome(nome) {
    console.log(`Olá, ${nome}`)

}

olaNome(`Analice`)

//Função utilizando Arrow Function

const tabuada = (num) => {
    console.log (`${num} * 1 = ${num*1} 
${num} * 2 = ${num*2} 
${num} * 3 = ${num*3} 
${num} * 4 = ${num*4} 
${num} * 5 = ${num*5} 
${num} * 6 = ${num*6} 
${num} * 7 = ${num*7} 
${num} * 8 = ${num*8} 
${num} * 9 = ${num*9} 
${num} * 10 = ${num*10} 
\n`)
} 

tabuada(2)
tabuada(3)
tabuada(4)
tabuada(6)

// //Função utilizando Expressão de Função

// const olaNome = function (nome) {
//     console.log(`Olá, ${nome}`)

// }

// olaNome(`Analice`)