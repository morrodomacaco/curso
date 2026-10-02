import PromptSync from "prompt-sync";
const prompt = PromptSync();

let tabuada = Number(prompt('digite o numero'))

console.log (`tabuada ${tabuada}`)

for (let i = 1; i <= 10; i++ ) {  
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}

 
