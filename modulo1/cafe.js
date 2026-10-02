import PromptSync from 'prompt-sync';

const prompt = PromptSync();

let resposta = prompt("voce gosta de cafe? ( sim/nao/talvez)=");
let gostadecafe = resposta === "sim"

if (gostadecafe) {
    console.log ("ele faz amor com o cafe");
}  else { 
    console.log (" ele odeia cafe")
}  
    console.log (" ele duvida do cafe")
