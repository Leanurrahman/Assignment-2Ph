const layer = document.getElementById("bubble-layer");

let lastTime = 0;
const throttleMs = 18;

document.addEventListener("mousemove", (e) => {
  const now = performance.now();
  if (now - lastTime < throttleMs) return;
  lastTime = now;


  const b = document.createElement("span");
  b.className = "cursor-bubble";


  const size = 6 + Math.random() * 8;
  b.style.width = `${size}px`;
  b.style.height = `${size}px`;

  
  const ox = (Math.random() - 0.5) * 10;
  const oy = (Math.random() - 0.5) * 10;

  b.style.left = `${e.clientX + ox}px`;
  b.style.top = `${e.clientY + oy}px`;

  
  const alpha = 0.45 + Math.random() * 0.45;
  b.style.background = `rgba(255, 0, 180, ${alpha})`;

  layer.appendChild(b);

  
  setTimeout(() => b.remove(), 750);
});
