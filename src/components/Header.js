import React from "react";

import logo from "../utils/images/logo.svg";
import home from "../utils/images/home-icon.svg";
import search from "../utils/images/search-icon.svg";
import watchList from "../utils/images/Watchlist-icon.svg";
// import { original } from "@reduxjs/toolkit";
import orignal from "../utils/images/original-icon.svg";
import movies from "../utils/images/movie-icon.svg";
import series from "../utils/images/series-icon.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="px-4 flex items-center bg-[#090b13] py-1 h-14">
      <img className="w-24 " src={logo}></img>
      <ul className=" flex flex-1 justify-evenly ">
        <Link to={"/"}>
          <li className="mx-4 flex  items-center cursor-pointer hover:underline ">
            <span>
              <img className="h-8 mx-2" src={home} />
            </span>
            <div className="text-white text-lg ">Home</div>
          </li>
        </Link>

        <li className="mx-4 flex  items-center cursor-pointer  ">
          <span>
            <img className="h-8 mx-2" src={search} />
          </span>
          <div className="text-white text-lg">Search</div>
        </li>
        <Link to={"/WatchList"}>
          <li className="mx-4 flex  items-center cursor-pointer  ">
            <span>
              <img className="h-8 mx-2" src={watchList} />
            </span>
            <div className="text-white">Watchlist</div>
          </li>
        </Link>
        <Link to={"/Orignal"}>
          <li className="mx-4 flex  items-center cursor-pointer  ">
            <span>
              <img className="h-8 mx-2" src={orignal} />
            </span>
            <div className="text-white text-lg">Orignal</div>
          </li>
        </Link>
        <Link to={"/movies"}>
          <li className="mx-4 flex  items-center cursor-pointer ">
            <span>
              <img className="h-8 mx-2" src={movies} />
            </span>
            <div className="text-white text-lg">Movies</div>
          </li>
        </Link>
        <Link to={"/series"}>
          <li className="mx-4 flex  items-center cursor-pointer  ">
            <span>
              <img className="h-8 mx-2" src={series} />
            </span>
            <div className="text-white text-lg">Series</div>
          </li>
        </Link>
        <Link to={"/login"}>
          <li className="mx-4 cursor-pointer  ">
            <div className="text-black text-lg space-x-1.5 px-3 text-center bg-white ">
              <button>Login</button>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
