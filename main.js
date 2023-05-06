// Data final para a contagem regressiva
var countDownDate = new Date("December 1, 2023 00:00:00").getTime();

// Atualiza o cronômetro a cada segundo
var x = setInterval(function() {

  // Data atual
  var now = new Date().getTime();
  
  // Calcula a diferença entre a data final e a data atual
  var distance = countDownDate - now;
  
  // Calcula os dias, horas, minutos e segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Exibe a contagem regressiva no elemento com id "countdown"
  document.getElementById("countdown").innerHTML = days + " D " + hours + " H "
  + minutes + " M " + seconds + " S";
  
  // Encerra a contagem regressiva quando a data final for alcançada
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRADO";
  }
}, 1000);
