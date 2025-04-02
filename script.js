const container = document.querySelector('#container');
const changeGridBtn = document.querySelector('button');

createGrid(16);

// change grid based on user input
changeGridBtn.addEventListener('click', () => {
  const noOfBoxes = prompt('How many boxes in a row? (max. 100):');
  deleteGrid();
  createGrid(noOfBoxes);
});

// delete grid
function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
// create 16x16 grid of square boxes
function createGrid(rowSize) {
  for (let i = 1; i <= rowSize * rowSize; i++) {
    const box = document.createElement('div');
    box.id = `box${i}`;
    box.style.width = `${960 / rowSize}px`;
    box.style.height = `${960 / rowSize}px`;
    box.classList.add('box');
    container.appendChild(box);

    // add hover effect on the boxes
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'pink';
    });
  }
}
