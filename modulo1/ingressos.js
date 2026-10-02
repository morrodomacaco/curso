import PromptSync from "prompt-sync";
const prompt = PromptSync

const lotes = [ 50, 40, 60, 30, 70];
let totalingressos = 0;
for (let i = 0; i < lotes.length; i++) {
totalingressos += lotes[i];
}
console.log(`o total de ingresos é ${totalingressos}`);
