import './styles/styles.css';
import * as data from './modules/scores';

async function display() {
  await data.setData({ name: 'manzi2', scores: 25 });
  data.getData();
}

display();
// const promise = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
// Promise.all([promise]).then((values) => console.log(values));
async function fetchUser() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await users.json();
  console.log(data);
}

fetchUser();