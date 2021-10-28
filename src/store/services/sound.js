// import ion from 'ion-sound'

const audioURL = 'audio/supermariobros/';

var enqueue = new Audio();
enqueue.src = audioURL+"bindstart.mp3";

var dequeue = new Audio();
dequeue.src = audioURL+"bindend.mp3";

var scan = new Audio();
scan.src = audioURL+"push2.mp3";

var  scaned = new Audio();
scaned.src = audioURL+"push3.mp3";

var  track = new Audio();
track.src = audioURL+"push1.mp3";

var  print = new Audio();
print.src = audioURL+"push1.mp3";


const $sound = {
    enqueue() {
      enqueue.play();
    },
    dequeue() {
      dequeue.play();
    },
    scan() {
      scan.play();
    },
    scaned(){
      scaned.play();
    },
    track(){
      track.play();
    },
    print(){
      print.play();
    },
}
export { $sound }