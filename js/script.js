// Initialize AOS and handle loading screen
document.addEventListener('DOMContentLoaded', function() {
  // Show loading screen for 3.5 seconds
  setTimeout(function() {
    document.getElementById('loading-screen').style.opacity = '0';
    document.getElementById('loading-screen').style.pointerEvents = 'none';
    document.getElementById('main-content').style.opacity = '1';
    
    // Initialize AOS after content is visible
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, 3500);
  
  // Initialize countdown
  initCountdown();
});

// Copy alias function
function copiarAlias() {
  const alias = document.getElementById('alias').textContent;
  navigator.clipboard.writeText(alias).then(function() {
    alert("Alias copiado: " + alias);
  }).catch(function(err) {
    console.error('Error al copiar: ', err);
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = alias;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Alias copiado: " + alias);
  });
}

// Countdown timer function
function initCountdown() {
  // Set the date we're counting down to
  const countDownDate = new Date("June 14, 2025 21:00:00").getTime();
  
  // Update the countdown every 1 second
  const x = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
    
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "¡El gran día ha llegado!";
    }
  }, 1000);
}

// Format time to always show two digits
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
