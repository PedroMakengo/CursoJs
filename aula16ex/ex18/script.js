let btn = document.querySelector("#adicionar");

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

btn.addEventListener("click", function () {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    lista.innerHTML = "";
    for (let valor in valores) {
      lista.innerHTML += `<option value=${valores[valor]}>${valores[valor]}</option>`;
    }
  } else {
    window.alert("Valor invalido ou já encontrado na lista");
  }
});
