function calculadoraDeMaoDeObra() {
  let totalDePontos = parseInt(document.getElementById("totalPontos").value);
  let valorHoraDeTrabalho = parseFloat(
    document.getElementById("horaDeTrabalho").value
  );
  let pontosPorMinuto = parseInt(document.getElementById("pontoMinuto").value);

  let totalMinutos = Math.round(totalDePontos / pontosPorMinuto);

  let valorFinal;

  if (totalMinutos / 60 >= 1) {
    valorFinal = Math.round(totalMinutos / 60) * valorHoraDeTrabalho;
  } else {
    valorFinal = (totalMinutos / 60) * 60 * valorHoraDeTrabalho;
  }

  let elementoValorFinal = document.getElementById("resultadoCalculadora");

  let resultadoCusto = "O custo da sua mão de obra é " + valorFinal + " reais";

  if (isNaN(valorFinal)) {
    elementoValorFinal.innerHTML =
      "<p> Por favor, preencha todos os campos. </p>";
  } else {
    elementoValorFinal.innerHTML = resultadoCusto;
  }
}
