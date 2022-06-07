// 40) Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
// unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
// a pagar (total a pagar = total - desconto), sabendo-se que:

// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%
// Declaração das minhas variáveis

let nomeProduto = "Ar condicionado"; // Podes mudar aqui o valor do produto
let quantidadeAdquirda = 19; // Podes mudar a quantidade do produto
let precoUnitario = 100; // kz preço do produto por unidade
let total;
let desconto;
let totalApagar;

// Aplicação as condições estabelecidas
if (quantidadeAdquirda <= 5) {
  // Calculando o total
  total = quantidadeAdquirda * precoUnitario;
  // Atribuindo o valor do desconto
  desconto = 2 / 100;
  // Calculando o total a pagar
  totalApagar = total - desconto;
  console.log(total, "kz é o total da conta adquirido");
  console.log(totalApagar, "Total da conta adquirido");
} else if (quantidadeAdquirda > 5 && quantidadeAdquirda <= 10) {
  // Calculando o total
  total = quantidadeAdquirda * precoUnitario;
  // Atribuindo o valor do desconto
  desconto = 3 / 100;
  // Calculando o total a pagar
  totalApagar = total - 3 / 100;
  console.log(total, "kz é o total da conta adquirido");
  console.log(totalApagar, "Total da conta adquirido");
} else if (quantidadeAdquirda > 10) {
  // Calculando o total
  total = quantidadeAdquirda * precoUnitario;
  // Atribuindo o valor do desconto
  desconto = 5 / 100;
  // Calculando o total a pagar
  totalApagar = total - desconto;
  console.log(total, "kz é o total da conta adquirido");
  console.log(totalApagar, "Total da conta adquirido");
}
