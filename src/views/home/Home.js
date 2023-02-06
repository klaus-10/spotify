import React, { useState } from "react";

import ImageSlider from "../../components/carousel/ImageSlider";
import SongCard from "../../components/music-card/SongCard";

//material components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

//icon

import "./Home.css";

const temp = [
  {
    title: "Cookie's and Cream mashmellow cane",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/YrtFlrLo2DQ",
    album: "Madreperla",
    audio: "",
  },
  {
    title: "Cookie's and Cream",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/OKLqGsCT8qs",
    album: "Madreperla",
    audio: "",
  },
  {
    title: "Cookie's and Cream",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
    album: "Madreperla",
    audio: "",
  },
  {
    title: "Cookie's and Cream",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
    album: "Madreperla",
    audio: "",
  },
  {
    title: "Cookie's and Cream",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
    album: "Madreperla",
    audio: "",
  },
  {
    title: "Cookie's and Cream",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
    album: "Madreperla",
    audio: "",
  },
  {
    title: "Cookie's and Cream",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
    album: "Madreperla",
    audio: "",
  },
  {
    title: "Cookie's and Cream",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
    album: "Madreperla",
    audio: "",
  },
  {
    title: "Cookie's and Cream",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
    album: "Madreperla",
    audio: "",
  },
  {
    title: "Cookie's and Cream",
    artist: "Gue",
    featuring: ["Rose Vallain", "Anna", "Sfera"],
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
    album: "Madreperla",
    audio: "",
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <section className="home-content-wm">
          <ImageSlider />
        </section>

        <section>
          <div className="flex-bw">
            <h2>Focus</h2>
            <h3>Read more</h3>
          </div>
          <div className="home-content-item">
            {temp.map((el, index) => (
              <SongCard
                title={el.title}
                artist={el.artist}
                featuring={el.featuring}
                img={el.img}
                album={el.album}
                audio={el.audio}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex-bw">
            <h2>Focus</h2>
            <h3>Read more</h3>
          </div>
          <div className="home-content-item">
            {temp.map((el, index) => (
              <SongCard
                title={el.title}
                artist={el.artist}
                featuring={el.featuring}
                img={el.img}
                album={el.album}
                audio={el.audio}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex-bw">
            <h2>Focus</h2>
            <h3>Read more</h3>
          </div>
          <div className="home-content-item">
            {temp.map((el, index) => (
              <SongCard
                title={el.title}
                artist={el.artist}
                featuring={el.featuring}
                img={el.img}
                album={el.album}
                audio={el.audio}
              />
            ))}
          </div>
        </section>

        <section>
          <div>
            <h2>Spotify Playlist</h2>
          </div>
        </section>
      </div>
    </div>
  );
}
