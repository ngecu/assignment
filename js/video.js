
const player = document.querySelector('.player');

const video = player.querySelector('.viewer');









function togglePlay() {
  let method;
  if (video.paused) {
    
     method = 'play';
  }
  else{
     method = 'pause';

  }
video[method]();


}

function updateButton() {
  let icon;
  if (this.paused) {
    icon = '►';
  } else {
    icon = '❚ ❚';
    
  }
  console.log(icon);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
