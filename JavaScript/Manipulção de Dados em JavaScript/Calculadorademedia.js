const prompt = require('prompt-sync')();

var nota1, nota2, nota3, media; 

console.log(`
         CALCULO DE MÉDIA DO ALUNO!!!
         `);

nota1 = parseFloat(prompt(`Digite a primeira nota - de 0 a 10, considere também digitar os décimos:`));
nota2 = parseFloat(prompt(`Digite a segunda nota - de 0 a 10, considere também digitar os décimos:`));
nota3 = parseFloat(prompt(`Digite a terceira nota - de 0 a 10, considere também digitar os décimos:`));

//cálculo da média

media = (nota1+nota2+nota3)/3;

console.log(`
         RESULTADO DO CALCULO !!!
         `);

console.log(`A média do aluno obtida pela soma das notas: ${nota1} + ${nota2} + ${nota3} é igual a ${media.toFixed(2)}`) ;
