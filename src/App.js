import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [people, index]);

  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>
            <span>/</span>
            reviews
          </h2>
        </div>

        <div className='section-center'>
          {people.map((person, personIndex) => {
            const { id, image, title, quote, name } = person;
            // something here
            let position = 'anextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <article key={id} className={position}>
                <img src={image} alt={title} className='person-img' />
                <h4> {name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            );
          })}
          <div className='prev' onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </div>
          <div className='next' onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
