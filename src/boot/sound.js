// import ion from 'ion-sound'
import { boot } from 'quasar/wrappers'

const soundList = 'binding.mp3,search1.mp3,registerpoint.mp3,pull.mp3,bindstart.mp3,pushcool.mp3,push4.mp3,bindend.mp3,closebag.mp3,error_notbind.mp3,push0.mp3,closebag3.mp3,search.mp3,bindinline.mp3,closebag2.mp3,push2.mp3,push3.mp3,login.mp3,logout.mp3,push.mp3,deselectbag.mp3,error.mp3,error_notplan.mp3,selectbag.mp3,push1.mp3,forcepush.mp3,error_notfound.mp3,bind.mp3,error1.mp3'.split(',');
const audioURL = 'sound/';

var enqueue = new Audio();
enqueue.src = audioURL+"bindstart.mp3";


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

export default boot(({ app, store }) => {
    app.config.globalProperties.$sound = $sound
})

export { $sound, soundList }