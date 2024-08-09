const search = document.getElementById('input');
const submitBtn = document.getElementById('submit');
// const results = await fetch(`addr&search=${search}`);
const key = '5bf88e88eb504b0ea2edfa200c0b0ca6'

submitBtn.addEventListener('click', async () => {
  const result = await fetch(`https://api.rawg.io/api/games?key=${key}&search=${search}`);

  const data = await result.json();

  console.log(data);
});