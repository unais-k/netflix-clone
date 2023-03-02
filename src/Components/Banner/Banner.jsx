import React, { useEffect, useState } from "react";
import axios from "../../axios.js";
import "./Banner.css";
import { API_key, imageURL } from "../../constants/constants";

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_key}&language=en-US`).then((response) => {
            setMovie(
                response.data.results.sort(function (a, b) {
                    return 0.5 - Math.random();
                })[0]
            );
        });
    }, []);

    return (
        <div style={{ backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})` }} className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.name || movie.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
