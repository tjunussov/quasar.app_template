import { Loading, QSpinnerAudio, QSpinnerBars } from 'quasar'

import { boot } from 'quasar/wrappers'

export default boot(({ app, store }) => {

  if(!window.speechSynthesis){
    console.debug('speechkit not found on device');
    app.config.globalProperties.$speechTalk = function() {};
    return;
  }
  // Execute loadVoices.
  var voices = loadVoices();

  store.state.voiceList = voices;

  var speechSettings = null;

  window.speechSynthesis.onvoiceschanged = function(e) {
    voices = loadVoices();
  };

  function loadVoices(){
    return speechSynthesis.getVoices().filter((i)=>i.lang.indexOf('en')>=0);
  }

  store.watch(() => store.getters.speech,(v)=>{
    speechSettings = v;
  },{ immediate: true })


  app.config.globalProperties.$speechTalk = (text = '') => {

    // console.debug('$speechTalk',text);

    return new Promise((resolve, reject) => {
      let speech = new SpeechSynthesisUtterance()
      // Set the text and voice attributes.

      if(speechSettings.voice) {
        speech.voice = speechSettings.voice
      } else {
        speech.voice = voices[Math.floor(Math.random()*voices.length)+1]
      }
      // speech.lang = lang
      speech.text = text
      speech.volume = speechSettings.volume
      speech.rate = speechSettings.rate
      speech.pitch = speechSettings.pitch

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
