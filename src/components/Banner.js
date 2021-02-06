import React, { useState, useEffect } from "react";

import "../style/banner.css";

import { axios, requests } from "../utils";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };

    fetchData();
  }, []);

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
  };
  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.original_name || movie?.name}</h1>
        <div className="banner__button">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p className="banner__description">
          {truncateString(`${movie?.overview}`, 148)}
        </p>
      </div>
      <div className="banner__fade__bottom" />
    </div>
  );
};

export default Banner;
