import PromptSync from "prompt-sync";
const prompt = PromptSync(); 

let dinheiro = parseFloat(prompt("Qual seu custo de produçao? "));
let venda = parseFloat(prompt("qual o valor de venda?"));
let lucro = parseFloat(prompt(`O seu lucro é: ${venda - dinheiro}`)); 



    if (dinheiro >= venda) {
console.log("Atenção: Margem de lucro perigosamente baixa");
} else {
console.log (" Margem de lucro saudável:");
}
