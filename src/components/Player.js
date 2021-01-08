import { useEffect, useState, useRef } from "react";
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';


function Player(props) {
    const audioEl = useRef(null);
    //So it doesn't start playing when we open the app
    const [isPlaying, setIsPlaying] = useState(false);



    //Play-Pause function
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();

        } else {
            audioEl.current.pause();
        }
    });
    //Skip forwards-backwards function
    //We make a close scope var with out current song and with our props and then we increment, to go to the next song
    //And if temp is over the length of the song list then return to the start
    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {


                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    }
    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong} />
            <p><strong>Next up:</strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist} </p>
        </div>
    )
}

export default Player;
//Importing the player details and the controls.
//We are using Ref to act like a way to access the DOM
