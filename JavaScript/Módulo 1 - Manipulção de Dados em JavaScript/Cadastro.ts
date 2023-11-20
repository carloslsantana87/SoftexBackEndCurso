const prompt = require('prompt-sync')();

//A identificação dos tipos das variáves devem ser: nome: string, salario: number (float), idade: number e diploma: boolean.

var nome: string, salario: number, idade: number, diploma:string, confirma: string, legend: string;

console.log(`

INICIANDO CADASTRO DE USUÁRIO!!!

`);

nome = (prompt(`Digite o nome completo do usuário:`).toUpperCase());
salario = parseFloat(prompt(`Digite o salário do usuário:`));
idade = parseInt(prompt(`Digite a idade do usuário:`));
confirma = (prompt(`O usuário tem diploma:SIM - Digite S | NÃO - Digite N:`).toUpperCase());

if (confirma === "S") {
    diploma = true;
    legend ="Usuário possui diploma!";
} else {
    diploma = false; 
    legend ="Usuário não possui diploma!";
}

console.log(`

CADASTRO REALIZADO!!!

`);

console.log(`O nome cadastrado do usuário: ${nome} e o tipo do dado cadastrado foi ${typeof(nome)}`);
console.log(`O salário cadastrado do usuário: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salario)} e o tipo do dado cadastrado foi ${typeof(salario)}`);
console.log(`A idade cadastrada do usuário: ${idade} anos e o tipo do dado cadastrado foi ${typeof(idade)}`);
console.log(`O usuário ${legend} cadastrado com diploma e o tipo do dado cadastrado foi ${typeof(diploma)}`);
