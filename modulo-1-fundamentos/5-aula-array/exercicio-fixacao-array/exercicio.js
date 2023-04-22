// 1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

const novoArrayNumber = [10, 50, 35, 40];

// 2. Depois disso, crie uma cópia deste array utilizando o método slice().

const copiaNovoArrayNumber = novoArrayNumber.slice();

console.log("Array Números");
console.table(novoArrayNumber);

console.log("Array Números Copia");
console.table(copiaNovoArrayNumber);

// 3. No array copiado:

// Remova o último item

copiaNovoArrayNumber.pop();

console.log("Array Números Copia Removido o Último Item");
console.table(copiaNovoArrayNumber);

console.log("Array Números (Permaneceu o mesmo)");
console.table(novoArrayNumber);

// Em seguida adicione o número 6 no fim do array.

copiaNovoArrayNumber.push(6);

console.log("Array Números Copia Acrescentado 6 no Fim");
console.table(copiaNovoArrayNumber);

// Depois, remova o número que está no índice 2 array.

copiaNovoArrayNumber.splice(2, 1);

console.log("Array Números Copia Removido o ìndice 2");
console.table(copiaNovoArrayNumber);

// Por fim, imprima os dois arrays.

console.log("Array Números Copia Final");
console.table(copiaNovoArrayNumber);

console.log("Array Números");
console.table(novoArrayNumber);

//Teste

let testeSplice = ["texto1", "texto2", "texto3", "texto4"];
console.log(testeSplice);
//Excluir o texto3
testeSplice.splice(2, 1); //Vou deletar a partir do indice 2, 1 item
console.log(testeSplice); //Vai mostrar a lista sem o texto3

//Se eu colocar o splice dentro do console.log ele vai imprimir o item que eu estou excluindo
console.log(testeSplice.splice(1, 1));
console.log(testeSplice);

// Verificar se funciona no console.table
console.table(testeSplice.splice(1, 1));
console.table(testeSplice);
