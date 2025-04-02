const container = document.querySelector('#container');

// create 16 square boxes
for (let i = 1; i <= 16 * 16; i++) {
  const box = document.createElement('div');
  box.id = `box${i}`;
  box.classList.add('box');
  container.appendChild(box);
}

// rearrange boxes into grid using css
