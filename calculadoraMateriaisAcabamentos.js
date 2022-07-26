
const valoresDaCalculadora = [];

function parsePushAcabamentos(acabamento) {
  valoresDaCalculadora.push(parseInt(acabamento));
}

function getCheckedValue(nome) {
  document.getElementsByName(nome).forEach((alternativa) => {
    if (alternativa.checked) {
      valoresDaCalculadora.push(parseInt(alternativa.value));
    }
  });
}

// Custos com acabamento
function custosExtra() {
  const custoMateriais = parseFloat(document.getElementById('materiais').value);
  const valorHoraTrabalho = parseFloat(
    document.getElementById('novamenteHoraTrabalho').value
  );

  parsePushAcabamentos(document.getElementById('pecasCostura').value * 5);
  getCheckedValue('olhos');
  getCheckedValue('olhosBordar');
  getCheckedValue('olhosEsculpir');
  getCheckedValue('sobrancelhas');
  getCheckedValue('nariz');
  getCheckedValue('boca');
  getCheckedValue('cabelo');
  getCheckedValue('arame');
  parsePushAcabamentos(document.getElementById('tempoExtra').value);

  console.log(valoresDaCalculadora);

  const valorInicial = 0;
  const somaDosValores = valoresDaCalculadora.reduce(
    (valor1, valor2) => valor1 + valor2,
    valorInicial
  );
  console.log(somaDosValores);

  let valorFinal;

  if (somaDosValores / 60 >= 1) {
    let totalHorasInteiras = Math.trunc(somaDosValores / 60);
    let valorParteInteira = Number(
      totalHorasInteiras * valorHoraTrabalho
    ).toFixed(1);
    let parteDecimal = somaDosValores / 60 - totalHorasInteiras;
    let valorParteDecimal = Number(
      (parteDecimal * 60 * valorHoraTrabalho) / 60
    ).toFixed(1);
    valorFinal = parseFloat(valorParteInteira) + parseFloat(valorParteDecimal);
  } else {
    valorFinal = parseFloat(Number(
      (Math.round((somaDosValores / 60) * 60) * valorHoraTrabalho) / 60
    ).toFixed(1));
  }
  console.log(valorFinal);
  const maoDeObraECustos = valorFinal + custoMateriais;
  console.log(maoDeObraECustos);
  let elementoResultadoPreco = document.getElementById('resultadoPrecoFinal');
  let resultadoPreco = "O custo dos materiais e acabamentos é " + maoDeObraECustos + " reais";
  if (isNaN(maoDeObraECustos)) {
    elementoResultadoPreco.innerHTML =
      "<p> Por favor, preencha todos os campos. </p>";
  } else {
    elementoResultadoPreco.innerHTML = resultadoPreco;
  }
}
