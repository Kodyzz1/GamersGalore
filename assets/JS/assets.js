const search = document.getElementById('input');
console.log(search);
const submitBtn = document.getElementById('submit');

const images1 = [
"./images/game-images/1.jpg",
"./images/game-images/1 - Z3d8JnW.jpg",
"./images/game-images/2 - hzmfj0d.jpg",
"./images/game-images/2 - Pj3j2aT.jpg",
"./images/game-images/3 - GVfCSKL.jpg",
"./images/game-images/3 - teGoarV.jpg",
"./images/game-images/4 - 38MMPB3.jpg",
];

const imageContainer = document.getElementById('imageContainer');


function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

function setRandomImage() {
  const imgElement = document.getElementById('randomImage');
  if (imgElement) {
  imgElement.src = getRandomImage(images1);}
  else {
    console.error('No image element found with id "randomImage"');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setRandomImage();
});

window.onload = setRandomImage;


// const results = await fetch(`addr&search=${search}`);
const key = '5bf88e88eb504b0ea2edfa200c0b0ca6';

// submitBtn.addEventListener('click', async () => {
//   const result = await fetch(`https://api.rawg.io/api/games?key=${key}&search=${search.value}`);

//   const data = await result.json();

//   console.log(data);
// });

while ("section".firstChild) {
  "section".removeChild("section".firstChild);
}

const section = document.querySelector('section');
const resultsDiv = document.createElement('div');
section.appendChild(resultsDiv);

function clearResults() {
  resultsDiv.innerHTML = '';
};

submitBtn.addEventListener('click', async () => {
  const result = await fetch(`https://api.rawg.io/api/games?key=${key}&search=${search.value}`);
  const data = await result.json();

  console.log(data);

  // Clear previous results
  clearResults();

  // Display data in resultsDiv
  data.results.forEach(game => {
    const gameDiv = document.createElement('div');
    gameDiv.textContent = game.name;
    resultsDiv.appendChild(gameDiv);
  });
});