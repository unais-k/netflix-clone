import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css";
import Banner from "./Components/Banner/Banner.jsx";
import RowPost from "./Components/RowPost/RowPost.jsx";
import { action, horror, originals, romance } from "./urls.js";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <RowPost url={originals} titles="Netflix Originals" />
            <RowPost url={action} titles="Action" isSmall />
            <RowPost url={horror} titles="Horror" isSmall />
            <RowPost url={romance} titles="Romance" isSmall />
        </div>
    );
}

export default App;
