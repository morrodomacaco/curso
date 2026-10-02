import PromptSync from "prompt-sync";
const prompt = PromptSync(); 

const frutas = [`abacate`, `pera`, `carambola`]
console.log (frutas)

console.log (frutas[1]);
console.log(frutas.length);

frutas.push("manga");
console.log(frutas);

frutas.unshift("uva");
console.log(frutas);

frutas.pop("carambola")
console.log(frutas);

console.log(frutas[1]);
console.log(frutas[frutas.length - 1]);

const numeros = [4, 8, 15];
console.log(numeros[0] + numeros[1] + numeros[2]);

for (let i = 0; i < frutas.length; i++) 
    console.log(frutas[i]);
console.log(frutas.includes("banana"));
