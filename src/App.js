import React from 'react';
import InputRow from './InputRow';
import Navbar from './Navbar';

import './App.css';

const list = [
  'mexer',
  'senso',
  'nobre',
  'corte',
  'vigor',
  'pleno',
  'plano',
  'ideia',
  'honra',
  'justo',
  'sonho',
  'amigo',
  'tempo',
  'digno',
  'feliz',
  'culto',
  'mundo'
]

const random = Math.floor(Math.random() * list.length);

let Word = list[random];

const Home = () => {
  if (localStorage.getItem('wins') === null) {
    localStorage.setItem('wins', 0);
  }
  return (
    <>
      <main>
        <Navbar />
        <div className='row'>
          <InputRow
          word = {Word}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
