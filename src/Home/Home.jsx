import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Home = ({ handleCart }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <SingleCard
          handleCart={handleCart}
          key={movie.movieName}
          movie={movie}
        ></SingleCard>
      ))}
    </div>
  );
};

export default Home;
