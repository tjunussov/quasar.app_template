
<template lang="pug">
q-card.q-pa-md.full-width.shadow-light
  slot
//- q-btn.full-width(no-caps Zoutline unelevated :color="color" :text-color="textColor" :disabled="disabled" v-on:click="onClick") 
  
</template>

<script>



export default {
  name: 'r-btn',
  data () {
    return {
      
    }
  },
  // computed: {
  //   shape () {
  //     return `q-btn-${this.round ? 'round' : 'rectangle'}`
  //   },
  //   btnClasses () {
  //     let cls = [ this.shape, 'btn-image inline relative-position' ]
  //     cls.push(`bg-${this.color}`)
  //     if (this.outline) {
  //       cls.push('q-btn-outline')
  //     }
  //     return cls
  //   },
  //   imgStyles () {
  //     let stls = [
  //       {width: `${this.size - 5}px`},
  //       {height: `${this.size - 5}px`},
  //       {padding: this.round ? '2px 2px 0 2px' : '0'}
  //     ]
  //     if (this.round) {
  //       stls.push({ borderRadius: '50%' })
  //     }
  //     return stls
  //   },
  //   btnStyles () {
  //     let stls = [
  //       {width: `${this.size}px`},
  //       {height: `${this.size}px`},
  //       {borderColor: `${this.outlineColor}`}
  //     ]
  //     return stls
  //   }
  // },
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
}
</script>
<style lang="stylus">

</style>

