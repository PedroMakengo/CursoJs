const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const num = document.querySelector("#num").value;
  const res = document.querySelector("#select");

  if (num.length == 0) {
    alert("[Erro] adicione um número");
  } else {
    let result = 0;
    res.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
      result = Number(num) * i;
      res.innerHTML += `<option>${num} x ${i} = ${result}</option>`;
    }
  }
});
