import promptsync from "prompt-sync";
const prompt = promptsync();

let nome = prompt("qual o nome do seu pet?");
let idade = prompt(" qual a idade do seu pet?");
console.log (`o ${nome} tem"${idade} anos `)
