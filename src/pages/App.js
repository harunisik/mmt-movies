import React, { useEffect, useState } from "react";
import { getMovies } from "../api/movieApi";
import { parseLinkHeader } from "../api/apiUtils";
import Logo from "../components/Logo";
import Group9 from "../components/Group9";
import BackArrow from "../components/BackArrow";
import ForwardArrow from "../components/ForwardArrow";
import Spinner from "../components/Spinner";
import MovieList from "../components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [prevLink, setPrevLink] = useState(null);
  const [nextLink, setNextLink] = useState(null);
  const [firstPage, setFirstPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const LIMIT = 10;
  const FIRST_PAGE = 1;

  useEffect(() => {
    loadMovies(`_limit=${LIMIT}&_page=${FIRST_PAGE}`);
  }, []);

  function loadMovies(queryParams) {
    setMovies([]);
    setIsLoading(true);
    getMovies(queryParams)
      .then((response) => {
        const xTotalCount = response.headers.get("X-Total-Count");
        setTotalCount(xTotalCount);

        const linkHeader = response.headers.get("Link");
        const pageInfo = parseLinkHeader(linkHeader);

        if (pageInfo) {
          setPrevLink(pageInfo.prev);
          setNextLink(pageInfo.next);
          setFirstPage(
            queryParams.substring(
              queryParams.indexOf("_page") + 6,
              queryParams.length
            )
          );
          setLastPage(
            pageInfo.last.substring(
              pageInfo.last.indexOf("_page") + 6,
              pageInfo.last.length
            )
          );
        } else {
          setPrevLink(null);
          setNextLink(null);
          setFirstPage(1);
          setLastPage(1);
        }

        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw error;
      });
  }

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  function handleSearchClick() {
    if (searchText == "") {
      loadMovies(`_limit=${LIMIT}&_page=${FIRST_PAGE}`);
      return;
    }

    if (searchText.length < 3) {
      alert("Please enter minumum three character to search !");
      return;
    }

    loadMovies(`title_like=${searchText}&_limit=${LIMIT}&_page=${FIRST_PAGE}`);
  }

  function handleOnKeyPress(event) {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  }

  return (
    <div className="mainWindow">
      <div className="flexWrapperFour">
        <div className="relativeWrapperFour">
          <Logo className="logoTwo" />
        </div>
        <div className="search">
          <Group9 className="group9" onClick={handleSearchClick} />
          <div className="group8">
            <input
              type="text"
              className="searchHere"
              value={searchText}
              onChange={handleChange}
              onKeyPress={handleOnKeyPress}
              placeholder="Search here..."
            />
          </div>
        </div>
      </div>
      <div className="flexWrapperThree">
        <div className="flexWrapperNine">
          <p className="num211ResultsFound">{`${totalCount} Results found`}</p>
          <div className="flexWrapperNine">
            {totalCount > 0 && (
              <p className="page1Of9">
                Page {firstPage} of {lastPage}
              </p>
            )}
            <div className="arrows">
              <div className="flexWrapperTwo">
                <BackArrow
                  onClick={() => loadMovies(prevLink)}
                  disabled={!prevLink}
                />
              </div>
              <div className="flexWrapperTwo">
                <ForwardArrow
                  onClick={() => loadMovies(nextLink)}
                  disabled={!nextLink}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flexWrapperNine">
          {isLoading && <Spinner />}
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default App;
