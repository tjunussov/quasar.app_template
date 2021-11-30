<template lang="pug">
.keyboard {{keyText}}
</template>

<script>
import {$http} from '../../boot/axios'      

var captureTM;


export default {
  name: 'Keyboard',
  data () {
    return {
      keyText:""
    }
  },
  created(){
    window.addEventListener('keydown',this.documentKeydown)
  },
  beforeUnmount(){
    window.removeEventListener('keydown',this.documentKeydown)
  },
  methods:{
    documentKeydown(event){

      // console.log('keycode',event.key,event.keyCode);

      if( event.target && event.target.className.indexOf('nokeyboard') >= 0) return;

      //
      if( event.target && event.target.tagName != 'BODY') {
        // console.debug('Blurring', event.target.tagName, event.target );
        event.target.blur();
      }

      if( event.keyCode >= 96 && event.keyCode <=105 ){ // only numpad and top numbers
        this.keyText += String.fromCharCode(event.keyCode-48);
      } else if( event.keyCode >= 65 && event.keyCode <=90 ){ // only alphanumerics
        this.keyText += String.fromCharCode(event.keyCode+(event.shiftKey?0:32));
      } else if( event.keyCode >= 48 && event.keyCode <=57 ) { // numbers

        if( event.shiftKey && (event.keyCode == 50 || event.keyCode == 51 )) { // "@#"
          this.keyText += event.key;
        } else {
          this.keyText += String.fromCharCode(event.keyCode);
        }
      } else if( event.keyCode == 110 || event.keyCode == 190 ) { // "."
        this.keyText += ".";
      } else if( event.keyCode == 189 || event.keyCode == 109 ) { // "."
        this.keyText += "-";
      }  

      // this.keyText += event.key;

      if(event.keyCode == 8 ){ // ????
        this.keyText = this.keyText.slice(0,-1)
      }

      if (event.keyCode == 13){ // || this.keyText.length == 13 || this.keyText.length == 14 
        var firstLetter = this.keyText.substr(0,1);

        if (this.keyText.length == 13) { // ENTER or BARCODE Length
          console.debug('emitting 13 len key text',this.keyText);
        } else {
          console.debug('emitting POIP',firstLetter,this.keyText.slice(1));
          this.$bus.$emit('keyboard:keydown:enter:'+firstLetter,this.keyText.slice(1));
        }

        //if(!isNaN(this.keyText)) {
        // if(this.keyText.length == 13 && event.keyCode == 13 ) return;// IF keyText length 13 and after pressed ENTER, skip it

        if(this.keyText != "") {
          this.$bus.$emit('keyboard:keydown:enter:'+this.keyText.length,this.keyText);
          this.$bus.$emit('keyboard:keydown:enter',this.keyText);
          this.keyText = ""
          event.preventDefault();
        }
      }

      window.clearTimeout(captureTM)
      captureTM = window.setTimeout(()=>{
        this.keyText = ""
        // $sound.play('error_expire_keyboard');
      },1000)
    },
  }
}


</script>

<style lang="sass">

.keyboard
  font-size: 10rem
  line-height: 10rem
  // margin-bottom: -1rem
  letter-spacing: -1rem
  opacity: 0.1
  overflow: hidden
  position: absolute
  right: 0
  bottom: 0
  left: 0
  z-index: 9999
  
</style>