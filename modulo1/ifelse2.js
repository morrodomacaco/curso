import PromptSync from "prompt-sync";
const prompt = PromptSync();

let ganhonormal = parseFloat(prompt("qual seu ganho por hora normal"));
let horasnomes = parseFloat(prompt("quantas horas no mes voce trabalha extra ?"))
let ganhoextra = parseFloat(prompt(`O seu  ganho por hora extra é: ${  ganhonormal * 1.5 }`)); 

let ganhototal = console.log(`o seu ganho total de horas extras no mes é ${ ganhonormal * 1.5 * horasnomes } `);


