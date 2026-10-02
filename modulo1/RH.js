import PromptSync from "prompt-sync";
const prompt = PromptSync(); 


let salario = parseFloat(prompt("Qual seu salário? "));
let nivel = prompt("Qual seu nível? (estagiario, junior, pleno): ").toLowerCase(); 

function calcularbonus(nivel, salario) {
    let bonus;

    switch (nivel) {
        case "estagiario": 
            bonus = salario * 0.10;
            break;
        case "junior":
            bonus = salario * 0.15;
            break;
        case "pleno":
            bonus = salario * 0.20;
            break; 
        default:
            bonus = 0;
    }

    return bonus; 
}


let bonus = calcularbonus(nivel, salario);


console.log('O seu salário base é: ' + salario); 
    console.log(`O seu salário com bônus é: ${salario + bonus}`); 
