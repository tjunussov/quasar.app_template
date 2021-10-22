
<template lang="pug">
q-item.r-alert.rounded-borders.text-weight-light(clickable v-ripple :class="['text-'+textColor,flat?'bg-'+color:'glass']")
  .bg(v-if="!flat" :class="[outlined?'':'bg-'+color,outlined?'outlined '+'text-'+color:'']")
  q-item-section(v-if="icon" avatar): q-icon(:name="icon" :color="color")
  q-item-section: q-item-label 
    slot
    .text-underline  Dismiss
//- q-banner(rounded dark v-bind="$props")
  template(v-slot:avatar)
    q-icon(:name="icon" :color="iconColor")
  slot
  div Dismiss
</template>

<script>
export default {
  name: 'r-alert',
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
      default: ''
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
}
</script>
<style lang="stylus">

.r-alert
  position relative
  overflow hidden
  font-size 14px
  padding 11px 16px

  &.glass .bg
    opacity 0.1
    position absolute
    height 100%
    width 100%
    display block
    top 0
    left 0

    &.outlined
      border 1px solid currentColor
      opacity 1

</style>

