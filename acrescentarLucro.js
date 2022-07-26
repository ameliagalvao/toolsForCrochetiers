	function resultadoComLucros () {
		let valorLucro = 0;
  document.getElementsByName('lucro').forEach((elemento) => {
    if (elemento.checked) {
      valorLucro = parseFloat(elemento.value);
      console.log(valorLucro);
    }
  })
		const custosMateriaisEAcabamentos = parseFloat(document.getElementById('campoCustoMateriais').value);
		const custoCrocheApenas = parseFloat(document.getElementById('campoCustoCroche').value);
		const resultadoValorAmigurumi = (custosMateriaisEAcabamentos + custoCrocheApenas) * valorLucro + (custosMateriaisEAcabamentos + custoCrocheApenas);
		console.log(resultadoValorAmigurumi)
		
		let elementoResultadoAmigurumi = document.getElementById('divResultadoAmigurumi');
  let resultadoFinalAmigurumi = "O valor final do seu amigurumi é " + resultadoValorAmigurumi + " reais";
		if (isNaN(resultadoValorAmigurumi)) {
    elementoResultadoAmigurumi.innerHTML =
      "<p> Por favor, preencha todos os campos. </p>";
  } else {
    elementoResultadoAmigurumi.innerHTML = resultadoFinalAmigurumi;
  }
	}
