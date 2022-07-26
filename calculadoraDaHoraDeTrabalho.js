function calculadoraDaHoraDeTrabalho() {
  let salarioMensal = parseFloat(document.getElementById('salarioMes').value);
  let horasPorDia = parseInt(document.getElementById('horasDia').value);
  let diasNaSemana = parseInt(document.getElementById('diasSemana').value);
  let quantidadeHorasMes = horasPorDia * diasNaSemana * 4;
  let resultadoCalcHoraTrabalho = parseFloat(Number(
    salarioMensal / quantidadeHorasMes
  ).toFixed(2));
  const elementoHoraTrabalho = document.getElementById(
    'resultadoValorHoraTrabalho'
  );
   const acrescimoHoraDeTrabalho = Number(0.27 * resultadoCalcHoraTrabalho + resultadoCalcHoraTrabalho).toFixed(2);
  const mensagemHoraTrabalho =
    'Para que você consiga ganhar em torno de ' + salarioMensal + ' reais trabalhando ' + horasPorDia + ' horas ao dia e ' + diasNaSemana + ' dias na semana, o recomendado é que sua hora de trabalho seja no mínimo ' + resultadoCalcHoraTrabalho + ' reais ' + 'e no máximo ' + acrescimoHoraDeTrabalho;
		
  if (isNaN(resultadoCalcHoraTrabalho)) {
    elementoHoraTrabalho.innerHTML =
      '<p> Por favor, preencha todos os campos. </p>';
  } else if (resultadoCalcHoraTrabalho < 5.5) {
    elementoHoraTrabalho.innerHTML = 'O valor da sua hora de trabalho é 5,5.'
  }  else {
    elementoHoraTrabalho.innerHTML = mensagemHoraTrabalho;
  }
}

