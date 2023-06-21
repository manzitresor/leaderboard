const scoreContainer = document.querySelector('.scores-container');

const leaderBoard = [
  {
    name: 'manzi',
    scores: 12,
  },
  {
    name: 'Tresor',
    scores: 15,
  },
  {
    name: 'saphir',
    scores: 25,
  },
  {
    name: 'Umutesi',
    scores: 25,
  },

];

function getData() {
  let scores = '';
  leaderBoard.forEach((element) => {
    setTimeout(() => {
      scores += `
    <div class="score">${element.name} : ${element.scores}</div>
    `;
      scoreContainer.innerHTML = scores;
    }, 1000);
  });
}

function setData(score) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      leaderBoard.push(score);
      const error = false;
      if (!error) {
        resolve();
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('error');
      }
    }, 1000);
  });
}

module.exports = { getData, setData };