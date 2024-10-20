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

const dirtySlide = {
    songName: 'Dirty Slide',
    artist: 'Alex Grohl',
    file: 'dirty_slide'
};

const coffeeStop = {
    songName: 'Coffee Stop',
    artist: 'Aves',
    file: 'coffee_Stop'
};

const diamondsAndIce = {
    songName: 'Diamonds and Ice',
    artist: 'Trust',
    file: 'trust'
};

const soulSwingin = {
    songName: 'Soul Swingin',
    artist: 'Richard Farrel',
    file: 'soul_swingin'
};

let isPlaying = false;
let isShuffled = false;

const originalPlaylist = [dirtySlide, coffeeStop, diamondsAndIce, soulSwingin];
let sortedPlaylist = [...originalPlaylist]; // ... < spread array content
let index = 0;

function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-fill');
    play.querySelector('.bi').classList.add('bi-pause-fill');
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector('.bi').classList.add('bi-play-fill');
    play.querySelector('.bi').classList.remove('bi-pause-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider() {
    if (isPlaying === true) {
        pauseSong();
    }
    else {
        playSong();
    }
}

function initializeSong(){
    cover.src = `images/${sortedPlaylist[index].file}.jpg`;
    song.src = `songs/${sortedPlaylist[index].file}.mp3`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
    } 
    else {
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong(){
    if(index === sortedPlaylist.length - 1){
        index = 0;
    } 
    else {
        index += 1;
    }
    initializeSong();
    playSong();
}

function updateProgressBar(){
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`)
}

function jumpTo(event){
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width)* song.duration;
    song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray){
    const size = preShuffleArray.length;
    let currentIndex = size - 1;
    while(currentIndex > 0){
       let randomIndex = Math.floor(Math.random()*size); //ignore decimals after first number
       let aux = preShuffleArray[currentIndex];
       preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
       preShuffleArray[randomIndex] = aux;
       currentIndex -= 1;
    }

}

function shuffleButtonClicked(){
    if(isShuffled === false){
        isShuffled = true;
        shuffleArray(sortedPlaylist);
        shuffleButton.classList.add('button-active');
    }
    else {
        isShuffled = false;
        sortedPlaylist = [...originalPlaylist];
        shuffleButton.classList.remove(`button-active`);
    }
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate',updateProgressBar);
progressContainer.addEventListener(`click`, jumpTo);
shuffleButton.addEventListener(`click`, shuffleButtonClicked);