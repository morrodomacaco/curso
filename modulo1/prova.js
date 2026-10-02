import PromptSync from "prompt-sync";
const prompt = PromptSync();

const notas = []; 
const prova1 = parseFloat(prompt("nota 1: "));
const prova2 = parseFloat(prompt("nota 2:"));

notas.push(prova1);
notas.push(prova2);
const media = (notas[0] + notas[1]) / notas.length

console.log(`à media é: ${media}`)