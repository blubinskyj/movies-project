import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/preloader';
import { Search } from '../components/Search';

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=486fea3b&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=486fea3b&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <main className={'container content'}>
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}
export { Main };
