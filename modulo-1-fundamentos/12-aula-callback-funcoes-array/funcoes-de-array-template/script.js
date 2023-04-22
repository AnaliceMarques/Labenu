//Callback

//Declare duas funções

//A primeira deve receber um array de números, e retornar todos os número do array multiplicados por 3;

function multiplicapor3(array) {
  const novaArray = [];
  for (let elemento of array) {
    novaArray.push(elemento * 3);
  }
  return novaArray;
}

//A segunda deve receber um array de números, e retornar um array somente com os números pares.

function retornaPares(array) {
  const novaArray = [];
  for (let numero of array) {
    if (numero % 2 === 0) {
      novaArray.push(numero);
    }
  }
  return novaArray;
}

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNumeros2 = [7, 3, 6, 8, 4, 2, 5];
console.log("Multiplica arr1", multiplicapor3(arrayNumeros));
console.log("Multiplica arr2", multiplicapor3(arrayNumeros2));
console.log("Retorna pares arr", retornaPares(arrayNumeros));
console.log("Retorna pares arr2", retornaPares(arrayNumeros2));

// Em seguida, crie uma função que deve receber como parâmetros um array e uma função. O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do novo array em uma variável. Em seguida, esta função vai imprimir os valores do novo array no console.

function funcaoImprimir(array, callback) {
  const novoArray = callback(array);
  console.log("dentro da função imprimir", novoArray);
}

//Faça duas chamadas da função acima, passando, em cada chamada, um array e uma das funções criadas anteriormente como callback.

funcaoImprimir(arrayNumeros, multiplicapor3);
funcaoImprimir(arrayNumeros, retornaPares);

//Map

// Refaça o item “A primeira deve receber um array de números, e retornar todos os números do array, multiplicados por 3”, dessa vez utilizando a função de array map().

function multiplicapor3Map(array) {
  const novoArray = array.map((numero) => {
    return numero * 3;
  }); //Se deixasse tudo na mesma linha, não precisaria colocar o return no map.
  return novoArray;
}
funcaoImprimir(arrayNumeros, multiplicapor3Map);

// Refaça o item “A segunda deve receber um array de números, e retornar um array apenas com os números pares”, dessa vez utilizando a função filter()

//map
//Sintaxe do .map() é .map(() => {})
//dentro () interno podemos chamar 3 parâmetros (elemento, indice, array), onde esses três parâmetros correspondem a array original.

/*
array.map((elemento) => elemento)   Sintaxe simplificada

array.map ((elemento) => {
  return elemento
})
*/

//filter
//Sintaxe do .filter() é .filter(() => {})
//Dentro () interno podemos chamar 3 parâmetros (elemento, indice, array), onde esses três parâmetros correspondem a array original.

/*
array.filter((elemento) => elemento === true)   Sintaxe simplificada

array.filter((elemento) =>{
  if(elemento === true){
    return elemento
  }
})
*/

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

// Com o array de pokémons do template, faça o seguinte:
// A. Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;
//pokemons[0].vida =100

function cura(pokemon) {
  pokemon.vida = 100;
  return pokemon;
}
vida(pokemons[0]);

console.log(pokemons);

// B. Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;

const pokemonsVidaCheia = pokemons.map((pokemon) => {
  return cura(pokemon);
});

// C. Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback, que deve retornar apenas os pokemons do tipo fogo.

const pokemonsDeFogo = pokemons.filter((pokemon) => {
  return pokemon.tipo === "fogo";
});
console.log(pokemonsDeFogo);
