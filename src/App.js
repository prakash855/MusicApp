import React, { useState } from "react";
import "./styles.css";

var musicDictionary = {
  Bollywood: [
    ["Besabriyan", "5/5"],
    ["Malang - Title Track", "4.9/5"],
    ["Shayad", "4.8/5"],
    ["Thoda Thoda Pyaar", "4.9/5"]
  ],
  Relaxing: [
    ["Kun Faya Kun", "5/5"],
    ["Kabhi Kabhi Aditi", "5/5"],
    ["Senorita", "4.9/5"],
    ["Little Do U Know", "4.8/5"]
  ],

  Classical: [
    ["O Mere Dil Ki Chain", "5/5"],
    ["Lag Ja Gale", "4.9/5"],
    ["Aye Mere Humsafar", "5/5"],
    ["Neele Neele Ambar Par", "5/5"]
  ],
  Punjabi: [
    ["Suit", "4.9/5"],
    ["Brown-Rang-De", "5/5"],
    ["Amplifier", "4.9/5"],
    ["Khwaab", "4.8/5"]
  ]
};

var musicList = Object.keys(musicDictionary);
export default function App() {
  var [output, setOutput] = useState("");

  function musicClickHandler(music) {
    var subList = musicDictionary[music];
    setOutput(subList);
  }

  return (
    <div className="App">
      <main>
        <h1>
          <span role="img" aria-label="">
            🎵
          </span>
          {"  "}
          Hey Music Lovers!
        </h1>
        <p>
          See a list of my favourite music. Click on a genre to get started.
        </p>
        <div className="genreList">
          {musicList.map((music) => {
            return (
              <span onClick={() => musicClickHandler(music)}>{music}</span>
            );
          })}
        </div>
        <hr />
        <div className="showMusic">
          <ul>
            {Array.from(output).map((item) => {
              return (
                <li>
                  {item[0]}
                  <br />
                  <span className="rating">{item[1]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
