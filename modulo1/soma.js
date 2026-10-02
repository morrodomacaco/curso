let somapares = 0;
let somaimpares = 0;

let totalpares = 0;
let totalimpares = 0;

let mediapares = 0;
let mediaimpares = 0;

for (let i = 0; i <= 999; i++) {
    if (i %2 === 0) { // par
        somapares = somapares + i;
        totalpares = totalpares + 1; // totalpares++
        console.log(`ò número ${i} é par.`)
        } else {//impar}
somaimpares = somaimpares + i;
totalimpares = totalimpares +i
console.log (`o numero ${i} é impar`)
        }
    }
    mediapares = somapares / totalpares;
    mediaimpares = somaimpares / totalimpares;

    if (somapares >  somaimpares){
        console.log("a soma dos valores pares é maior.");
    } else if (somaimpares > somapares){
    console.log (" a soma dos impares é maior");
    } else  {
    
            console.log("sao iguais")
        }
    console.log("====   PARES ===");
    console.log(`quantidade: ${totalpares}`);
    console.log(`soma: ${somapares}`);
    console.log(`media: ${mediapares}`)
    console.log ("=== IMPARES ===")
    console.log (`quantidade: ${totalimpares}`)
    console.log(`soma ${somaimpares}`)
    console.log(`media: ${mediaimpares}`)
