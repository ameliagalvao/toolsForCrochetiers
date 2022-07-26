function somaPontosCarreiras () {
const textoInputCarreiras = document.getElementById('inputPontosReceita').value.split('+').map(Number);
  let valorInicial = 0;
  const resultadoSomaCarreiras = textoInputCarreiras.reduce(
        (valor1, valor2) => valor1 + valor2,
        valorInicial
    );

   const elementoSomaCarreiras= document.getElementById('resultadoDaSomaOutput');
  const exibirResultadoCarreiras = 'O total de pontos da receita é ' + resultadoSomaCarreiras;
	if (isNaN(resultadoSomaCarreiras)) {
    elementoSomaCarreiras.innerHTML =
      "<p> Por favor, utilize o + como separador. </p>";
  } else {
    elementoSomaCarreiras.innerHTML = exibirResultadoCarreiras;
  }
}
