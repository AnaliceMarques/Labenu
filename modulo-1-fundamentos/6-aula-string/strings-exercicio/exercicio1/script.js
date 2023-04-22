// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:

//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```

// Você deve usar apenas um `console.log()` para isso

const nomeDoUsuario = prompt(`Qual é o seu nome?`);
const comidaFavorita1 = prompt(`Qual é a sua comida favorita?`);
const comidaFavorita2 = prompt(`Qual é a sua segunda comida favorita?`);
const comidaFavorita3 = prompt(`E qual é a sua terceira comida favorita?`);

console.log(`Esas são as comidas favoritas de ${nomeDoUsuario}
- ${comidaFavorita1}
- ${comidaFavorita2}
- ${comidaFavorita3}`);
