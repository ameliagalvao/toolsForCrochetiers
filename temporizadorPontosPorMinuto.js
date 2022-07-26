function temporizadorPontos() {
	let elementoTemporizador = document.getElementById('temporizador');
	let elementoBotaoIniciar = document.getElementById('botaoTemporizador');
  let contador = 60;

  let temporizador = setInterval(function () {
    contador--;
    elementoTemporizador.innerHTML = contador;
    elementoBotaoIniciar.disabled = true;

    if (contador <= 0) {
      clearInterval(temporizador);
      elementoBotaoIniciar.disabled = false;
    }
  }, 1000);
}
