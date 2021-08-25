let btnAdicionar = document.querySelector("#adicionar");
let btnFinalizar = document.querySelector("#finalizar");

let num = document.querySelector("#number");

let lista = document.querySelector("#nums");

let res = document.querySelector("#res");

let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

btnAdicionar.addEventListener("click", function () {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    lista.innerHTML = "";
    for (let valor in valores) {
      lista.innerHTML += `<option value="${valores[valor]}">${valores[valor]}</option>`;
    }
  } else {
    window.alert("Valor invalido ou já encontrado na lista");
  }
});

btnFinalizar.addEventListener("click", function () {
  if (valores.length == 0) {
    alert("Adicione valores antes de finalizar");
  } else {
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let i in valores) {
      soma += valores[i];
      media = valores[i] / valores.length;
      if (valores[i] > maior) maior = valores[i];
      if (valores[i] < menor) menor = valores[i];
    }
    res.innerHTML = "";
    res.innerHTML += `<p>A todo temos ${lista.length} números cadastros</p>`;
    res.innerHTML += `<p>O maior valor digitado ${maior}</p>`;
    res.innerHTML += `<p>O menor valor digitado ${menor}</p>`;
    res.innerHTML += `<p>Somando todos os valores ${soma}</p>`;
    res.innerHTML += `<p>A média de todos os valores ${media}</p>`;
  }
  num.value = "";
  num.focus();
});
