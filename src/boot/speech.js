import { Loading, QSpinnerAudio, QSpinnerBars } from 'quasar'

import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {

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

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = SpeechRecognition ? new SpeechRecognition() : false

  app.config.globalProperties.$speechToText = {
    start: (lang = 'en-US', message = '', continuous = false) => {
      return new Promise((resolve, reject) => {
        let text = ''
        setTimeout(() => {
          Loading.show({
            // delay: 400,
            spinner: QSpinnerBars, // ms,
            backgroundColor: 'primary',
            message,
            messageColor: 'white'
          })
          recognition.lang = lang // this.voiceSelect
          recognition.continuous = continuous
          recognition.start()
        }, 400)

        recognition.onresult = (event) => {
          let current = event.resultIndex
          // Get a transcript of what was said.
          let transcript = event.results[current][0].transcript
          // Add the current transcript to the contents of our Note.
          // var noteContent += transcript
          text += transcript
          console.debug('SUCCESS')
          resolve(text)
        }
        recognition.onspeechend = (event) => {
          // if (continuous) {
          // reject(false)
          Loading.hide()
          // console.log('end')
          // }
        }
        recognition.nomatch = () => {
          Loading.hide()
          // reject(false)
        }
        recognition.onend = () => {
          text = ''
          Loading.hide()
          if (!continuous) {
            reject(false)
          }
        }
      })
    },
    stop: () => {
      recognition.stop()
    }
  }
  
});
