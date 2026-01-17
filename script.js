console.log("JS Loaded");

const cake = document.querySelector('.cake');
const flames = document.querySelectorAll('.flame');
const song = document.getElementById('birthday-song'); // Select the audio

cake.addEventListener('click', function() {
  
  // 1. Blow out candles
  flames.forEach((flame) => {
    flame.classList.toggle('out'); 
  });

  console.log("Made a wish! 🎂");

  // 3. Trigger Confetti
  if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 250);
  }
});