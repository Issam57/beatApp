var bg = document.querySelector('#particles-js');

document.addEventListener('click', () => {
    bg.style.backgroundColor = getRandomColor();
})

document.addEventListener('keydown', (event) => {
    var key = event.key;
    playMusic(key);
});

function playMusic(key) {
    switch(key) {
        case "a": 
            var audio = new Audio('sons/Clap1.wav');
            audio.play();
            break;
        case "z": 
            var audio = new Audio('sons/Kick1.wav');
            audio.play();
            break;
        case "e": 
            var audio = new Audio('sons/kick.mp3');
            audio.play();ob
            break;
        case "r": 
            var audio = new Audio('sons/kick2.mp3');
            audio.play();
            break;
        }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i=0; i<6; i++) {
        color = color + letters[Math.floor(Math.random()*letters.length)]
    }
    return color;
};