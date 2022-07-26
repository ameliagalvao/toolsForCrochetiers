function calculadoraDeMaoDeObra() {
  let totalDePontos = parseInt(document.getElementById('totalPontos').value);
  let valorHoraDeTrabalho = parseFloat(
    document.getElementById('horaDeTrabalho').value
  );
  let pontosPorMinuto = parseInt(document.getElementById('pontoMinuto').value);
  let totalMinutos = Math.round(totalDePontos / pontosPorMinuto);
  let valorFinal;

  if (totalMinutos / 60 >= 1) {
    let totalHorasInteiras = Math.trunc(totalMinutos / 60);
    let valorParteInteira = Number(
      totalHorasInteiras * valorHoraDeTrabalho
    ).toFixed(1);
    let parteDecimal = totalMinutos / 60 - totalHorasInteiras;
    let valorParteDecimal = Number(
      (parteDecimal * 60 * valorHoraDeTrabalho) / 60
    ).toFixed(1);
    valorFinal = parseFloat(valorParteInteira) + parseFloat(valorParteDecimal);
  } else {
    valorFinal = Number(
      (Math.round((totalMinutos / 60) * 60) * valorHoraDeTrabalho) / 60
    ).toFixed(1);
  }

  let elementoValorFinal = document.getElementById('resultadoCalculadora');
  let resultadoCusto = 'O custo da sua mão de obra é ' + valorFinal + ' reais';

  if (isNaN(valorFinal)) {
    elementoValorFinal.innerHTML =
      '<p> Por favor, preencha todos os campos. </p>';
  } else {
    elementoValorFinal.innerHTML = resultadoCusto;
  }
}
