function playSound (event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return ;// stop the function from running
    // console.log(event)
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing')
    // console.log(key)
}

function removeTransition(event) {
    if(event.propertyName !== 'transform') return;// skip it if it's not a transform
    // console.log(event.propertyName)
    this.classList.remove('playing');
}

const keys =  document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
