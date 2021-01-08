//Dont forget to import useEffect and useState from react.
import { useEffect, useState } from "react";
import Player from './components/Player';


function App() {
  //Creating an array of songs
  const [songs] = useState([
    {
      title: "Godzilla (feat. Juice WRLD) [Official Audio]",
      artist: "Eminem",
      img_src: "./images/img-7.jpg",
      src: "./music/Godzilla (feat. Juice WRLD) [Official Audio].mp3"
    },
    {
      title: "ViViD-BLUE",
      artist: "Vivid",
      img_src: "./images/img-2.jpg",
      src: "./music/ViViD-BLUE.mp3"

    },
    {
      title: "IMPOSSIBLE ft. Trevor McNevan",
      artist: "Manafest",
      img_src: "./images/img-6.jpg",
      src: "./music/MANAFEST IMPOSSIBLE MUSIC VIDEO FEATURING TREVOR OF THOUSAND FOOT KRUTCH.mp3"

    },
    {
      title: "Contradiction",
      artist: "The God of High School",
      img_src: "./images/img-5.jpg",
      src: "./music/The God of High School Opening FullKsuke Ft. Tyler Carter - Contradiction.mp3"

    },
    {
      title: "ALI – LOST IN PARADISE feat. AKLO",
      artist: "ALI - feat. AKLO",
      img_src: "./images/img-1.jpg",
      src: "./music/ali_lost_in_paradise_feat_aklo_music_video_-7607055440844628851.mp3"

    },
    {
      title: "bbno$ & y2k - lalala",
      artist: "bbno$, Y2K",
      img_src: "./images/img-3.jpg",
      src: "./music/Y2K, bbno - Lalala (Official Video).mp3"

    },
    {
      title: "6IX9INE- GOOBA (Official Music Video)",
      artist: "6ix9ine",
      img_src: "./images/img-4.jpg",
      src: "./music/6IX9INE- GOOBA (Official Music Video).mp3"

    }
  ]);
  //How to change to the next song. Function for calling the next song
  //If we skip past the list length it will return us to 0
  //But if we dont go back to 0 than we will get our current song plus one, so next song
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (

    //Calling the import Player
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
