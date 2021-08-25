const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let valInicial = Number(document.querySelector("#value1").value);
  let valFInal = Number(document.querySelector("#value2").value);
  let passo = Number(document.querySelector("#value3").value);
  const res = document.querySelector("#res");

  if (valInicial.length == 0 || valFInal.length == 0 || passo.length == 0) {
    alert("[Erro] faltam dados");
  } else {
    res.innerHTML = "Contando:";
    let i = valInicial;
    let f = valFInal;
    let p = passo;

    for (let contador = i; contador <= f; contador += p) {
      res.innerHTML += ` ${contador} 👉`;
    }
  }
});
