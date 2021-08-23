const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let valInicial = Number(document.querySelector("#value1").value);
  let valFInal = Number(document.querySelector("#value2").value);
  let passo = Number(document.querySelector("#value3").value);
  const res = document.querySelector("#res");

  if (!valInicial || !valFInal || !passo) {
    res.innerText = "Impossível contar";
  } else if (passo <= 0) {
    alert("Passo invalido! Considerando o passo 1");
  } else if (valInicial < valFInal) {
    for (valInicial; valInicial <= valFInal; valInicial += passo) {
      console.log(valInicial);
      res.innerHTML = "<p>Contando:</p>";
      // Verificar está parte para melhorar
      res.innerText = `${valInicial}`;
    }
  }
});
