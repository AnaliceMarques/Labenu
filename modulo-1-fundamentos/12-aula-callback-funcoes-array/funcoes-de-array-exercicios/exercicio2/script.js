const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

function multiplicarPor3Map(array) {
  const triplo = array.map((numero) => {
    return numero * 3;
  });
  return triplo;
}

//Usando a sintaxe mais simplificada no .map
function dividirPor2Map(array) {
  const metade = array.map((numero) => numero / 2);
  return metade;
}

console.log(multiplicarPor3Map(arrayNumeros));
console.log(dividirPor2Map(arrayNumeros));
