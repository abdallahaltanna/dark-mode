import React, { useEffect, useState } from 'react';
import articles from './data';
import Article from './Article';

const getLocalStorage = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getLocalStorage());

  const toggleBtn = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <nav>
        <section className='nav-center'>
          <h1>Overreacted</h1>
          <button className='btn' onClick={toggleBtn}>
            toggle
          </button>
        </section>
      </nav>
      <section className='articles'>
        {articles.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </section>
    </>
  );
}

export default App;
