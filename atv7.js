var calcular = document.getElementById("calcular");

calcular.addEventListener("click", () => {
  var salariohora = document.getElementById("salariohora").value;
  var horastrab = document.getElementById("horastrab").value;
  var salario = document.getElementById("salario");
  var valortotal = salariohora * horastrab;
  var porcentagem;
  var valorfinal;

  if (valortotal > 500) {
    porcentagem = 0.1;
  } else if (valortotal < 500) {
    porcentagem = 0.05;
  }
  parseFloat(valortotal);
  valorfinal = valortotal + valortotal * porcentagem;
  salario.innerHTML = "seu salário é: R$" + valorfinal;
});
