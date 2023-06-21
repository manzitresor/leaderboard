const scoreContainer = document.querySelector('.scores-container');

const setScore = async (name, score) => {
  try {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HKHvD4XLI9reQG9q3nRW/scores/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ user: name, score }),
    });
  } catch (error) {
    console.log(error);
  }
};

const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HKHvD4XLI9reQG9q3nRW/scores/');
  const json = await response.json();
  const data = json.result;
  let scores = '';
  data.forEach((res) => {
    scores += `
    <div class="score">${res.user}:${res.score}</div>
    `;
  });

  scoreContainer.innerHTML = scores;
};

module.exports = { setScore, getScores };