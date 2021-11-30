
<template lang="pug">
q-rating.animated(:modelValue="modelValue?.length" :max="pin.length" :size="size" :class="{'shakeX':error}" color="grey" :color-selected="color" :icon="icon" readonly Zno-dimming)
</template>

<script>



export default {
  inheritAttrs: false,
  name: 'r-pincode',
  props: {
    modelValue:{
      type: String,
      required: true
    },
    pin: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: 'star'
    },
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: '2em'
    },
  },
  emits:['match'],
  computed: {
    error(){
      return this.modelValue.length == this.pin.length && this.modelValue != this.pin;
    }
  },
}
</script>
<style lang="sass">

.q-rating__icon
  text-shadow: none

</style>

