import React from 'react';
import InputRow from './InputRow';
import Navbar from './Navbar';

import './App.css';

const list = [
  'negro',
  'nigga',
  'bitch',
  'penis',
  'carne'
]

const random = Math.floor(Math.random() * list.length);

let Word = list[random];

const Home = () => {
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
