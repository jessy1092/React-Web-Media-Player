import React, { Component } from 'react';
import './App.css';
import WebMediaPlayer from './WebMediaPlayer/WebMediaPlayer'
import bande from './img/bande.png';
import logo from './img/logo.svg';
import info from './img/info.svg';
import heart from './img/heart.svg';


class App extends Component {
  render() {


    return (
      <div className="App">

        <iframe title="fsqfdsqf" width="560" height="315" src="https://www.youtube.com/embed/aqz-KE-bpKQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <WebMediaPlayer
          title="Video Player"
          thumbnail="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
          video="https://nusid.net/video.mp4"
          width="560"
          height="315"
          logo="https://slideshowexemple1-djlttrqvkb.now.sh/slide1.jpg"
        />

        <WebMediaPlayer
          title="Slideshow Player"
          link="https://google.com"
          thumbnail="https://slideshowexemple1-djlttrqvkb.now.sh/slide1.jpg"
          slideshow={
            [{
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide1.jpg",
              endTime: 2.0
            }, {
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide2.jpg",
              endTime: 4.0
            }, {
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide3.jpg",
              endTime: 6.0
            }, {
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide4.jpg",
              endTime: 8.0
            }, {
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide5.jpg",
              endTime: 5000.0
            }]}
          logo={logo}
          logoLink="https://google.com"
          buttons={[{ img: info, style: { width: "29px", }, callback: (e) => console.log("info clicked" + e) },
          { img: heart, href: "https://google.com", style: { width: "26px",}, callback: (e) => console.log("heart clicked" + e)}
          ]}
        />

        <WebMediaPlayer
          title="Audio Slideshow Player"
          link="https://google.com"
          thumbnail="https://slideshowexemple1-djlttrqvkb.now.sh/slide1.jpg"
          audio="https://nusid.net/audio.flac"
          slideshow={
            [{
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide1.jpg",
              endTime: 2.0
            }, {
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide2.jpg",
              endTime: 4.0
            }, {
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide3.jpg",
              endTime: 6.0
            }, {
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide4.jpg",
              endTime: 8.0
            }, {
              src: "https://slideshowexemple1-djlttrqvkb.now.sh/slide5.jpg",
              endTime: 120.0
            }]}
          logo={bande}
          logoLink="https://google.com"
        />
      </div>
    );
  }
}

export default App;
