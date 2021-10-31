import { Loading, QSpinnerAudio, QSpinnerBars } from 'quasar'

import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {

    if(!window.speechSynthesis){
      console.debug('speechkit not found on device');
      app.config.globalProperties.$speechTalk = function() {};
    }
    // Execute loadVoices.
    var voices = loadVoices();

    window.speechSynthesis.onvoiceschanged = function(e) {
      voices = loadVoices();
    };

    function loadVoices(){
      return speechSynthesis.getVoices().filter((i)=>i.lang.indexOf('en')>=0);
    }


  app.config.globalProperties.$speechTalk = (text = '') => {

    return new Promise((resolve, reject) => {
      let speech = new SpeechSynthesisUtterance()
      // Set the text and voice attributes.

      speech.voice = voices[Math.floor(Math.random()*voices.length)+1];
      // speech.lang = lang
      speech.text = text
      speech.volume = 1
      speech.rate = 1
      speech.pitch = 1.2
      setTimeout(() => {
        window.speechSynthesis.speak(speech)
      }, 300)

      // speech.addEventListener('start', () => {
      //   Loading.show({
      //     delay: 0,
      //     spinner: QSpinnerAudio, // ms,
      //     backgroundColor: 'primary'
      //   })
      // })

      speech.addEventListener('end', () => {
        // Loading.hide()
        resolve(true)
      })
    })

  }

  
});
