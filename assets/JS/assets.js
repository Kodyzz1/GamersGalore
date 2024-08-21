const search = document.getElementById('input');
const submitBtn = document.getElementById('submit');

const images1 = [
  "../images/game-images/img1.jpg",
  "../images/game-images/img2.jpg",
  "../images/game-images/img3.jpg",
  "../images/game-images/img4.jpg",
  "../images/game-images/img5.jpg",
  "../images/game-images/img6.jpg",
  "../images/game-images/img7.jpg",
  "../images/game-images/img8.jpg",
  "../images/game-images/img9.jpg",
  "../images/game-images/img10.jpg",
  "../images/game-images/img11.jpg",
  "../images/game-images/img12.jpg",
  "../images/game-images/img13.jpg",
  "../images/game-images/img14.jpg",
  "../images/game-images/img15.jpg",
  "../images/game-images/img16.jpg",
  "../images/game-images/img17.jpg",
  "../images/game-images/img18.jpg"
];

const imageContainer = document.getElementById('imageContainer');

function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function setRandomImage() {
  const imgElement = document.getElementById('randomImage');
  if (imgElement) {
    imgElement.src = getRandomImage(images1);
  } else {
    console.error('No image element found with id "randomImage"');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setRandomImage();
});

window.onload = setRandomImage;

const key = '5bf88e88eb504b0ea2edfa200c0b0ca6';

const section = document.querySelector('section');
const resultsDiv = document.createElement('div');
const resultsImg = document.createElement('img');
resultsImg.id = 'randomImage';
resultsImg.src = getRandomImage(images1);
section.appendChild(resultsDiv);
resultsDiv.appendChild(resultsImg);

function clearResults() {
  resultsDiv.innerHTML = '';
}

submitBtn.addEventListener('click', async () => {
  const result = await fetch(`https://api.rawg.io/api/games?key=${key}&search=${search.value}`);
  const data = await result.json();

  console.log(data);

  clearResults();

  data.results.forEach(game => {
    const gameDiv = document.createElement('div');
    gameDiv.textContent = game.name;
    resultsDiv.appendChild(gameDiv);
  });
});