// import ion from 'ion-sound'

const audioURL = 'sound/';

var test = new Audio();
test.src = audioURL+"test.mp3";



const $sound = {
    test() {
      test.play();
    },
}
export { $sound }