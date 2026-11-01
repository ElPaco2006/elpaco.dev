'use strict';

const niko = document.getElementById('niko');
const hour = new Date().getHours();
const nap_time = hour < 7 || hour > 21;
if (nap_time) niko.src = 'assets/images/niko_sleep.webp';

const snd = new Audio(nap_time ? 'assets/audio/cat_purr.wav' : 'assets/audio/meow.wav');
niko.onclick = () => {
    snd.currentTime = 0;
    snd.play();
}