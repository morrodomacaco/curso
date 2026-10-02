import PromptSync from "prompt-sync";
const prompt = PromptSync(); 

let nome = parseInt(prompt("Qual o nome do seu cachorro? "))
let raca = parseInt(prompt("qual a raca do seu cachorro? "))
let idade = parseInt(prompt("qual a idade do seu cachorro? "))

const paciente = {nome, raca, idade}

if (idade >= 8) {
    console.log(`O paciente ${nome} já é sênior e precisa de exames de rotina`);
} else {
    console.log (`O paciente ${nome} esta na faixa de idade regular`);
}