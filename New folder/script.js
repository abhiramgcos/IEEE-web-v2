// Generate floating retro shapes in the background
const shapes = ['×', 'o', '+'];
const container = document.querySelector('.retro-bg');

for (let i = 0; i < 40; i++) {
  const span = document.createElement('span');
  span.classList.add('shape');
  span.innerText = shapes[Math.floor(Math.random() * shapes.length)];
  span.style.left = `${Math.random() * 100}%`;
  span.style.top = `${Math.random() * 100}%`;
  span.style.animationDelay = `${Math.random() * 5}s`;
  container.appendChild(span);
}
