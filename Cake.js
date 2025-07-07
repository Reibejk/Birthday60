const correctPassword = "happybday"; // Set your secret password here

document.getElementById("login-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.getElementById("password").value;

      if (input === correctPassword) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("main-content").style.display = "block";
      } else {
        alert("Incorrect password! Try again.");
      }
    });

document.addEventListener("DOMContentLoaded", function () {
  function createCandles(nCandles, radius, zIndexOffset = 1) {
    const wrapper = document.getElementById("cakeWrapper");
    const candles = [];
    
    for (let i = 0; i < nCandles; i++) {
      
      const angle = (2 * Math.PI / nCandles) * i;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      candles.push({angle, x, y});
    }
    candles.sort((a, b) => a.y - b.y);
    
    candles.forEach((pos, index) => {
      const candle = document.createElement("div");
      candle.className = "candle";
      candle.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      candle.style.zIndex = `${zIndexOffset + index}`
      
      const flame = document.createElement("div");
      flame.className = "flame";
      
      const duration = (0.25 + Math.random() * 0.2).toFixed(2);
      const delay = (Math.random() * 0.3).toFixed(2);
      flame.style.animationDuration = `${duration}s`;
      flame.style.animationDelay = `${delay}s`;
      flame.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      candle.appendChild(flame);
      wrapper.appendChild(candle);
    })
    
  }
  createCandles(36, 140, 1);
  createCandles(24, 90, 100);
});




