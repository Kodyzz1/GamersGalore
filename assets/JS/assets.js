const search = document.getElementById('input');
console.log(search);
const submitBtn = document.getElementById('submit');
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