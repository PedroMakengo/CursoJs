const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let valInicial = document.querySelector("#value1").value;
  let valFInal = document.querySelector("#value2").value;
  let passo = document.querySelector("#value3").value;
  const res = document.querySelector("#res");

  if (valInicial.length == 0 || valFInal.length == 0 || passo.length == 0) {
    res.innerHTML += "Impossível de contar";
  } else {
    res.innerHTML = "Contando: <br />";
    let i = Number(valInicial);
    let f = Number(valFInal);
    let p = Number(passo) == 0 ? 1 : Number(passo);

    if (i < f) {
      for (let contador = i; contador <= f; contador += p) {
        res.innerHTML += ` ${contador} 👉`;
      }
      res.innerHTML += `\u{1F3C1}`;
    } else {
      for (let contador = i; contador >= f; contador -= p) {
        res.innerHTML += ` ${contador} 👉`;
      }
      res.innerHTML += `\u{1F3C1}`;
    }
  }
});
