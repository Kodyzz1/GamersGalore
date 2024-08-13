const search = document.getElementById('input');
console.log(search);
const submitBtn = document.getElementById('submit');
// const results = await fetch(`addr&search=${search}`);
const key = '5bf88e88eb504b0ea2edfa200c0b0ca6'

const game = [];

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