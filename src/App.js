import React from 'react';
import './index.css';
import List from './List';
import {useState} from 'react';
import data from './data';

const App = () => {
  const[people,setPeople] =useState(data);
  

  const handleClick= () =>{
     setPeople([]) ;
  }
  
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people ={people}/>
        <button className='button' onClick= {handleClick}>Clear All</button>
      </section>
    </main>
    
  );
}

export default App;


