import PromptSync from "prompt-sync";
const prompt = PromptSync();



let multiplicacao = Number(prompt('digite o numero'))

console.log (`multiplicacao ${multiplicacao}`)

for (let i = 1; i <= 10; i++ ) {  
    console.log(`${multiplicacao} x ${i} = ${multiplicacao * i}`);
}