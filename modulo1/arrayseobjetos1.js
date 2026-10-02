import PromptSync from "prompt-sync";
const prompt = PromptSync(); 

const estoquetamanhos = [10, 15, 8];
const quantidade = parseInt(prompt("quantas luvas P foram vendida? "))

estoquetamanhos[0]= estoquetamanhos[0]- quantidade

if (estoquetamanhos[0]<5){
    console.log( "Alerta:Estoque de luvas tamanho P está crítico!")
}
else{
    console.log("Estoque atualizado. Quantidade restante do tamanho P:"+ estoquetamanhos[0])
}