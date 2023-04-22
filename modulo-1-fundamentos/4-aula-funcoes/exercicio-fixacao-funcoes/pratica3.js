
/*
Faça uma função
que receba como parâmetros, login e senha. 
No corpo da função declare duas variáveis do tipo string loginArmazenado e senhaArmazenada com lavores já pré estabelecidos. Usaremos essas variáveis para verificar se são iguais às que estamos recebendo como parâmetro. 
Retorne true se as duas variáveis forem verdadeiras.
*/

const pratica3 = (loginDigitado,senhaDigitada) => {
    const loginArmazenado = "admin@gmail.com"
    const senhaArmazenada = "bananinha"

    return loginDigitado === loginArmazenado &&
            senhaDigitada === senhaArmazenada

}

function pratica3Function (loginDigitado,senhaDigitada) {
    const loginArmazenado = "admin@gmail.com"
    const senhaArmazenada = "bananinha"

    return loginDigitado === loginArmazenado &&
            senhaDigitada === senhaArmazenada

}

console.log(pratica3("admin@gmail.com","bananinha")) //acertou o login, volta true
console.log(pratica3("analice@gmail.com","bananinha")) //errou o login, volta false


console.log(pratica3Function("admin@gmail.com","bananinha"))
console.log(pratica3Function("analice@gmail.com","bananinha"))