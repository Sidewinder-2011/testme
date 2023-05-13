import React, { useState, useEffect } from 'react';
import "./Grid.css";
import Movie from '../Movie/Movie';

import {
    useFocusable,
    FocusContext
  } from "@noriginmedia/norigin-spatial-navigation";
import Header from '../Header/Header';
import Slideshow from '../SliderShow/Slideshow';

const Grid = () => {
   
    const [movies, setMovies] = useState([]);
  const limit= 5;
  const movieURL = "https://api.tvmaze.com/shows";

 useEffect(() => {
   fetchMovies();
 }, [limit]);

  const { ref, focusSelf, setFocus, focusKey, focused } = useFocusable();

useEffect(() => {
    focusSelf();
  }, [focusSelf]);

const fetchMovies = () => {
   fetch(movieURL)
     .then((res) => res.json())
     .then((response) => {
        setMovies(response);
        setTimeout(() => {}, 1500);
      });
 };

  return (
    <div>
    
    <FocusContext.Provider value={focusKey}>
    <Header />
    <Slideshow />
    <div className='main-box'>
          {movies.slice(0, limit).map((movie, key) => {
            return (
                <Movie ref={ref} mov={movie} key={key} />  
            );
          })}
    </div>
    </FocusContext.Provider>
    </div>
  )
}

export default Grid
