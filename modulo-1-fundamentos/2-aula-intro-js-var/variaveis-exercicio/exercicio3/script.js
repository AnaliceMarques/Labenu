let nomeDoFuncionario = prompt("Qual o seu nome completo?");
let dataDeNascimento = prompt(
  "Qual a sua data de nascimento? *Responda no formato DD/MM/AAAA"
);
let endereco = prompt("Qual o seu endereço?");
let cpf = prompt("Qual o seu CPF?"); //Não deixei como Number, porque ele não reconhece o 0 no início do número
let escolaridade = prompt("Qual a sua escolaridade?");
let possuiCnh = confirm(
  "Se você possuir CNH clique em OK, caso não, clique em Cancelar."
); //vai retornar o valor True ou False
let quantosFilhos = Number(prompt("Quantos filhos você possui?"));
let cargoAtual = prompt("Qual o seu cargo atual?");
let salario = Number(
  prompt(
    "Qual o valor do seu salário? *Digite apenas números, sem pontos, vírgulas ou R$"
  )
);
let comissao = Number(
  prompt(
    "Você recebe comissão? Se sim, informe o valor da porcentagem, caso não, responda com zero."
  )
);
let anoAdmissao = Number(prompt("Qual seu ano de admissão?"));

console.log(typeof nomeDoFuncionario);
console.log(typeof dataDeNascimento);
console.log(typeof endereco);
console.log(typeof cpf);
console.log(typeof escolaridade);
console.log(typeof possuiCnh);
console.log(typeof quantosFilhos);
console.log(typeof cargoAtual);
console.log(typeof salario);
console.log(typeof comissao);
console.log(typeof anoAdmissao);

console.log("Nome do funcionário:", nomeDoFuncionario);
console.log("Data de nascimento:", dataDeNascimento);
console.log("Endereço:", endereco);
console.log("CPF:", cpf);
console.log("Escolaridade:", escolaridade);
console.log("Possui CNH:", possuiCnh);
console.log("Quantos filhos:", quantosFilhos);
console.log("Cargo atual:", cargoAtual);
console.log("Salário:", salario);
console.log("Comissão:", comissao);
console.log("Ano de admissão:", anoAdmissao);

console.log(
  "Funcionário(a)",
  nomeDoFuncionario + ", nasceu no dia",
  dataDeNascimento + ", o número do seu CPF é",
  cpf + ", e reside no endereço",
  endereco + ". Sua escolaridade é",
  escolaridade + ", é",
  possuiCnh,
  "que possui CNH, e possui",
  quantosFilhos,
  "filho(s).",
  "Seu cargo atual é",
  cargoAtual + ", com um salário de",
  salario,
  "e comissão de",
  comissao + ", seu ano de admissão foi",
  anoAdmissao + "."
);
