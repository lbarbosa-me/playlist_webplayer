# playlist_webplayer
This project is a music player implemented in JavaScript, which allows users to play, pause, skip to the next or previous tracks, display song progress, and includes a shuffle functionality for randomizing the playlist order.

Main Features:

Play Music: Allows playing and pausing a song.
Song Navigation: Users can skip to the next or go back to the previous song in the playlist.
Visual Progress Bar: A progress bar displays the current song's playtime.
Seek to Specific Positions: Users can click on the progress bar to jump to different parts of the song.
Shuffle Functionality: Randomizes the order of the playlist, allowing users to toggle between the original and shuffled order.

Code Structure

1. DOM Elements and Variables: The code selects relevant HTML elements, such as the song name, band name, play/pause button, cover image, progress control, and next/previous buttons:

const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');

2. Playlist of Songs: Each song in the playlist is represented as an object, including song name, artist, and the filename of the audio:

const dirtySlide = { songName: 'Dirty Slide', artist: 'Alex Grohl', file: 'dirty_slide' };
const coffeeStop = { songName: 'Coffee Stop', artist: 'Aves', file: 'coffee_Stop' };
const diamondsAndIce = { songName: 'Diamonds and Ice', artist: 'Trust', file: 'trust' };
const soulSwingin = { songName: 'Soul Swingin', artist: 'Richard Farrel', file: 'soul_swingin' };

3. Music Control Functions:
playSong and pauseSong: Control the playback of the song and toggle the play/pause button icon.
playPauseDecider: Decides whether to play or pause based on the current state (isPlaying).

5. Song Initialization: The initializeSong function sets the visual elements (cover image, song name, artist) and loads the correct audio file from the playlist:

function initializeSong() {
    cover.src = `images/${sortedPlaylist[index].file}.jpg`;
    song.src = `songs/${sortedPlaylist[index].file}.mp3`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
}

5. Song Navigation:
previousSong and nextSong: Allow users to navigate through the playlist, looping back to the first song if the end is reached.

7. Progress Bar and Seek Functionality:
updateProgressBar: Updates the progress bar as the song plays.
jumpTo: Allows users to click on the progress bar to jump to a specific part of the song.

9. Playlist Shuffle:
shuffleArray: Implements the Fisher-Yates algorithm to shuffle the playlist.
shuffleButtonClicked: Toggles between the shuffled and original playlist order:

function shuffleArray(preShuffleArray) {
    let currentIndex = preShuffleArray.length - 1;
    while(currentIndex > 0) {
       let randomIndex = Math.floor(Math.random() * preShuffleArray.length);
       [preShuffleArray[currentIndex], preShuffleArray[randomIndex]] = [preShuffleArray[randomIndex], preShuffleArray[currentIndex]];
       currentIndex -= 1;
    }
}

Events and Interactivity:

Play/Pause Button: Controls song playback.
Next and Previous Buttons: Skips to the next or previous song in the playlist.
Progress Bar: Updates in real-time as the song plays, allowing users to jump to specific times.
Shuffle Button: Shuffles the playlist when clicked.

Future Improvements:
Add Volume Control: Allow users to adjust the volume directly within the player.
Dynamic Playlist: Enable users to dynamically add/remove songs from the playlist.
Repeat Mode: Add functionality to repeat a song or the entire playlist.
