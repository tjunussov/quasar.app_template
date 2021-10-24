// import ion from 'ion-sound'

const audioURL = '/audio/supermariobros/';

var queue = new Audio();
queue.src = audioURL+"bindstart.mp3";

var scan = new Audio();
scan.src = audioURL+"push2.mp3";

var  scanBegin = new Audio();
scanBegin.src = audioURL+"push3.mp3";

const $sound = {
    queue() {
      queue.play();
    },
    scan() {
      scan.play();
    },
    scanBegin(){
      scanBegin.play();
    }
}
export { $sound }