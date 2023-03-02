import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./RowPost.css";
import axios from "../../axios";
import { API_key, imageURL } from "../../constants/constants";
import YouTube from "react-youtube";
function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState("");
    useEffect(() => {
        axios
            .get(props.url)
            .then((res) => {
                setMovies(res.data.results.sort());
            })
            .catch((err) => {
                alert("Network Error");
            });
    }, []);
    const opts = {
        height: "590",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const HandleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_key}&language=en-US`).then((res) => {
            if (res.data.results.length !== 0) {
                setUrlId(res.data.results[0]);
            } else {
                console.log("No Video");
            }
        });
    };
    return (
        <div className="row">
            <h2>{props.titles}</h2>
            <div className="posters">
                {movies.map((obj) => (
                    <img
                        onClick={() => HandleMovie(obj.id)}
                        className={props.isSmall ? "smallPoster" : "poster"}
                        src={`${imageURL + obj.backdrop_path || imageURL + obj.poster_path}`}
                        alt=""
                    />
                ))}
            </div>
            {urlId && <YouTube opts={opts} videoId={urlId.key} />}
        </div>
    );
}

export default RowPost;
