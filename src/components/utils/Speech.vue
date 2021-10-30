<template lang="pug">
q-page
  .row.q-col-gutter-md.q-pa-xl
    q-select.col-12(outlined='' v-model='voiceSelect' :options='optionsVoice' :label="$t('languages')" emit-value='' map-options='')
      .col-6.q-pt-md
        q-btn.float-right(push='' color='primary' round='' size='lg' icon='keyboard_voice' @click='record()')
      .col-6.q-pt-md
        q-btn(push='' color='primary' round='' size='lg' icon='play_arrow' @click='playAudio()')
      .col-12.text-center
        q-toggle(v-model='continuous' :label="$t('continuous')" left-label='')
      .col-12
        q-input(filled='' v-model='text' outlined='' :label="$t('textLabel')" @blur='n++')
          template(v-if='text' v-slot:append='')
            q-icon.cursor-pointer(name='cancel' @click.stop="text = ''")
      .col-12.text-center
        img(alt='Quasar logo' src='statics/podcast.svg' style='width: 190px')
      .col-12.q-pa-lg.text-caption
        .text-bold(v-text="$t('instructionsTitle')")
          div(v-text="$t('instructionsLangDesc01')")
            div
              | {{ $t(&apos;instructionsLangDesc02&apos;) }}
              q-btn(dense='' color='primary' round='' size='xs' icon='keyboard_voice')
                | {{ $t(&apos;instructionsLangDesc03&apos;) }}
            div
              | {{ $t(&apos;instructionsLangDesc04&apos;) }}
              br
              |             {{ $t(&apos;instructionsLangDesc05&apos;) }}
            div
              | {{ $t(&apos;instructionsLangDesc06&apos;) }} 
              q-btn(dense='' color='primary' round='' size='xs' icon='play_arrow') .
        q-page-sticky(v-if='btnStop' position='bottom-right' :offset='[15, 18]' style='z-index: 10000')
          q-btn(fab='' icon='stop' color='negative' @click='stop()')

</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      text: '',
      voiceSelect: this.$t('langValue'),
      optionsVoice: [],
      continuous: false,
      btnStop: false,
      n: 1
    }
  },
  mounted () {
    this.setVoices()
  },
  methods: {
    setVoices () {
      let id = setInterval(() => {
        if (this.optionsVoice.length === 0) {
          this.voicesList()
        } else {
          clearInterval(id)
        }
      }, 50)
    },
    voicesList () {
      let teste = window.speechSynthesis
      this.optionsVoice = teste.getVoices().map(voice => ({
        label: voice.name, value: voice.lang
      }))
    },
    playAudio () {
      this.$speechTalk(this.voiceSelect, this.text)
    },
    record () {
      if (!this.$q.platform.is.chrome) {
        this.$q.notify({
          message: this.$t('unsupportedBrowserDesc'),
          color: 'negative',
          icon: 'sentiment_very_dissatisfied'
        })
        return false
      }
      this.btnStop = true
      this.$speechToText.start(this.voiceSelect, this.$t('waitingAudioDesc'), this.continuous)
        .then((suc) => {
          this.text += ' ' + suc
          if (this.continuous) {
            this.record()
          } else {
            this.btnStop = false
          }
        })
        .catch(() => {
          this.btnStop = false
        })
    },
    stop () {
      this.$speechToText.stop()
      this.btnStop = false
    }
  }
}
</script>
