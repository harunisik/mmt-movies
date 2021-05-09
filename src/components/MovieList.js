import React, { useState } from "react";
import PropTypes from "prop-types";
import MovieModal from "./MovieModal";
import ReactModal from "react-modal";

const MovieList = ({ movies }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="flexWrapperFive">
            <div className="toyStory">
              <img
                alt=""
                className="rectangle1"
                src={movie.logoUrl}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setModalOpen(true);
                  setSelectedMovie(movie);
                }}
              />
              <p className="toyStory1995">
                {movie.title}
                <br />
                {movie.year}
              </p>
            </div>
          </div>
        );
      })}
      <ReactModal
        isOpen={modalOpen}
        contentLabel="Movie Details"
        ariaHideApp={false}
      >
        <MovieModal onClick={() => setModalOpen(false)} movie={selectedMovie} />
      </ReactModal>
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
};
