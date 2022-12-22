
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");

const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(getTime, 1000));

function getTime(data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
}

const previusTime = JSON.parse(localStorage.getItem(CURRENT_TIME));

player.setCurrentTime(previusTime || 0);
