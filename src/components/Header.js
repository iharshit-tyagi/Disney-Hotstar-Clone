import React from "react";
import styled from "styled-components";
import logo from "../utils/images/logo.svg";
import home from "../utils/images/home-icon.svg";
import search from "../utils/images/search-icon.svg";
import watchList from "../utils/images/Watchlist-icon.svg";
// import { original } from "@reduxjs/toolkit";
import orignal from "../utils/images/original-icon.svg";
import movies from "../utils/images/movie-icon.svg";
import series from "../utils/images/series-icon.svg";

function Header() {
  return (
    <div className="px-4 flex items-center bg-slate-600 py-1">
      <img className="w-24 " src={logo}></img>
      <ul className=" flex ">
        <li className="mx-4 flex  items-center ">
          <span>
            <img className="h-8 mx-2" src={home} />
          </span>
          <div className="text-white">Home</div>
        </li>
        <li className="mx-4 flex  items-center ">
          <span>
            <img className="h-8 mx-2" src={search} />
          </span>
          <div className="text-white">Search</div>
        </li>
        <li className="mx-4 flex  items-center ">
          <span>
            <img className="h-8 mx-2" src={watchList} />
          </span>
          <div className="text-white">Watchlist</div>
        </li>
        <li className="mx-4 flex  items-center ">
          <span>
            <img className="h-8 mx-2" src={orignal} />
          </span>
          <div className="text-white">Orignals</div>
        </li>
        <li className="mx-4 flex  items-center ">
          <span>
            <img className="h-8 mx-2" src={movies} />
          </span>
          <div className="text-white">Movies</div>
        </li>
        <li className="mx-4 flex  items-center ">
          <span>
            <img className="h-8 mx-2" src={series} />
          </span>
          <div className="text-white">Series</div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
