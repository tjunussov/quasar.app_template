
<template lang="pug">
q-card.r-btncard.column.q-pa-md(dark dense v-ripple flat :class="['text-'+textColor,flat?'bg-'+color:'glass']" :disabled="disabled" v-on:click="onClick" Zv-bind="$props")
  .bg(v-if="!flat" :class="[outlined?'':'bg-'+color,outlined?'outlined '+'text-'+color:'']")
  q-card-section.col
    q-icon(v-if="icon" :name="icon" size="md" :color="iconColor?iconColor:(flat?textColor:color)")
  q-card-section.col-auto.text-weight-medium
    slot
</template>

<script>

export default {
  name: 'r-btncard',
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
      default: 'grey-7'
    },
    flat: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: 'white'
    },
    to: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: null
    },
    outlined: {
      type: Boolean,
      default: false
    },
    
    disabled: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    onClick () {
      if(this.to) this.$router.replace(this.to);
      else this.$emit('click')
    }
  },
}
</script>
<style lang="stylus">

.r-btncard
  min-height 8rem
  position relative
  overflow hidden
  line-height 1.2

  &.glass .bg
    opacity 0.2
    position absolute
    height 100%
    width 100%
    display block
    top 0
    left 0

    &.outlined
      border 1px solid currentColor
      opacity 1
    

.q-card__section--vert
  padding 0 

</style>

