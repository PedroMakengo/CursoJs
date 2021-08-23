const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const num = Number(document.querySelector("#num").value);
  const res = document.querySelector("#select");

  let result = 0;
  for (let i = 1; i <= 12; i++) {
    result = num * i;
    res.append(`<option>${num} x ${i} = ${result}</option>`);
  }
});
