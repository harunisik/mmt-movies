import React from "react";
import PropTypes from "prop-types";

const MovieModal = ({ onClick, movie }) => {
  return (
    <div className="toyStoryModal">
      <img alt="" className="backToTheFutureMoviePoster1" src={movie.logoUrl} />
      <div className="flexWrapperOne">
        <p>
          <strong>
            {movie.title} {movie.year}
          </strong>
        </p>
        <p className="directorJohnLasseterCastTomHanks">
          <strong className="styles.directorJohnLasseterCastTomHanksEmphasis0">
            Director:
          </strong>{" "}
          John Lasseter
          <br />
          <br />
          <strong className="directorJohnLasseterCastTomHanksEmphasis0">
            Cast:
          </strong>{" "}
          Tom Hanks, Tim Allen, Don Rickles
          <br />
          <br />
          <strong className="directorJohnLasseterCastTomHanksEmphasis0">
            Genre:
          </strong>{" "}
          Animation, Adventure, Comedy, Family, Fantasy
          <br />
          <br />
        </p>
        <p className="woodyAGoodHeartedCowboyDollWhoBe">
          Woody, a good-hearted cowboy doll who belongs to a young boy named
          Andy, sees his position as Andy&#039;s favorite toy jeopardized when
          his mom buys him a Buzz Lightyear action figure.
          <br />
          <br />
          Even worse, the arrogant Buzz thinks he&#039;s a real spaceman on a
          mission to return to his home planet. When Andy&#039;s family moves to
          a new house, Woody and Buzz must escape the clutches of maladjusted
          neighbor Sid Phillips and reunite with their boy.
        </p>
      </div>
      <button onClick={onClick}>Close</button>
    </div>
  );
};

export default MovieModal;

MovieModal.propTypes = {
  onClick: PropTypes.func,
  movie: PropTypes.object,
};
