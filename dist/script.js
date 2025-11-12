const cube = document.querySelector('.cube');
let float = 0;
setInterval(() => {
  float = Math.sin(Date.now() / 500) * 5;
  cube.style.transform = `translateY(${float}px)`;
}, 30);