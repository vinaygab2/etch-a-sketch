const container = document.querySelector('#container');

// create 16x16 grid of square boxes
for (let i = 1; i <= 16 * 16; i++) {
  const box = document.createElement('div');
  box.id = `box${i}`;
  box.classList.add('box');
  container.appendChild(box);

  // add hover effect on the boxes
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'pink';
  });
}
