import './styles/styles.css';
import * as data from './modules/scores';

data.getScores();

const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  data.setScore(name.value, score.value);
  name.value = '';
  score.value = '';
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  data.getScores();
});
