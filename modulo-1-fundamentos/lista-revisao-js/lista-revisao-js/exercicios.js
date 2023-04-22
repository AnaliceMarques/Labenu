// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

console.log(retornaTamanhoArray([1, 2, 3, 4]));

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(
    (itemAnterior, itemPosterior) => itemAnterior - itemPosterior
  );
}

//Pode ser feito com for dentro de for

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((numero) => numero % 2 === 0);
}

/*
Poderia ter sido feito com for:
const resultado
for(let numero of array){
    if(numero % 2 === 0){
        resultado.push(numero)
    }
}
return resultado
*/

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const arrayNumerosPares = array.filter((numero) => numero % 2 === 0);
  return arrayNumerosPares.map((numero) => numero ** 2);
}

/*
Poderia ter usado a função do exercício 4, no lugar de utilizar o filter:
const numerosPares = retornaNumerosPares(array)
*/

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0;
  for (let numero of array) {
    if (numero > maiorNumero) {
      maiorNumero = numero;
    }
  }
  return maiorNumero;
}
/*
Poderia ter feito com a função do exercício 3:
const arrayOrdenado = retornaArrayOrdenado(array
    return arrayOrdenado[arrayOrdenado.length - 1]
*/

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero;
  let maiorDivisivelPorMenor;
  let diferenca;

  if (num1 > num2) {
    maiorNumero = num1;
    maiorDivisivelPorMenor = num1 % num2 === 0;
    diferenca = num1 - num2;
  } else {
    maiorNumero = num2;
    maiorDivisivelPorMenor = num2 % num1 === 0;
    diferenca = num2 - num1;
  }

  const objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  };
  return objeto;
}

/*
Poderia  fazer o objeto só colocando as váriaveis e poderia fazer return {maiorNumero, maiorDivisivelPorMenor, diferenca} que ele já retorna um objeto.
*/

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const numerosPares = [];
  for (let i = 0; numerosPares.length < n; i += 2) {
    numerosPares.push(i);
  }
  return numerosPares;
}

/*
Como começa com 0 e queremos apenas os números pares, fazemos o incremento de 2, porque aí sempre vai nos retornar os números pares. Se o incremento fosse apenas 1 eu teria que colocar uma condição dentro para verificar a paridade.
Não colocamos o igual porque já começa com 0, se colocar o igual a lista fica com um número a mais que o n.
*/

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let tipoDeTriangulo;

  if (ladoA === ladoB && ladoB === ladoC) {
    tipoDeTriangulo = "Equilátero";
  } else if (
    (ladoA === ladoB && ladoB !== ladoC) ||
    (ladoA !== ladoB && ladoB === ladoC) ||
    (ladoA === ladoC && ladoB !== ladoC)
  ) {
    tipoDeTriangulo = "Isósceles";
  } else {
    tipoDeTriangulo = "Escaleno";
  }
  return tipoDeTriangulo;
}

/*
No else if eu não precisaria colocar a condição de um lado ser diferente, porque já fica implicito devido a não atender a primeira condição de todos serem iguais.
*/

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = array.sort((a, b) => a - b);
  const novoArray = [arrayOrdenado[arrayOrdenado.length - 2], arrayOrdenado[1]];
  return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const pessoaAnonima = { ...pessoa, nome: "ANÔNIMO" };
  return pessoaAnonima;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = [];
  for (let pessoa in pessoas) {
    if (
      pessoas[pessoa].idade > 14 &&
      pessoas[pessoa].idade < 60 &&
      pessoas[pessoa].altura >= 1.5
    ) {
      pessoasAutorizadas.push(pessoas[pessoa]);
    }
  }
  return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = [];
  for (let pessoa of pessoas) {
    if (pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5) {
      pessoasNaoAutorizadas.push(pessoa);
    }
  }
  return pessoasNaoAutorizadas;
}

//Na 13A utilizei o for...in e na 13B utilizei o for..of. Dá pra fazer com filter também.

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (let cliente in contas) {
  }
  return contas;
}
/* Resolução Funcionando
 function retornaContasComSaldoAtualizado(contas) {
    for (let i in contas){
        let somaCompras = 0
        for (let j in contas[i].compras){
        somaCompras += contas[i].compras[j]
        }
        contas[i].compras=[]
        contas[i].saldoTotal -= somaCompras
        }
    return contas
}
*/

/*
    for (let compras in cliente) {
      let valor = 0;

      for (let i = 0; i < cliente.compras.length; i++) {
        valor += cliente.compras[i];
        cliente.compras = [];
      }

      contas[cliente].saldoTotal -= valor;
*/
//Tentar fazer com map

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let consultasOrdem = [];
  for (let paciente of consultas) {
    consultasOrdem.push(paciente.nome);
  }
  consultasOrdem.sort();
  console.log(consultasOrdem);

  return consultas;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
