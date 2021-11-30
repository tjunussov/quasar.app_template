
<template lang="pug">
q-item.r-item(Zclickable Zv-ripple)
  q-item-section(v-if="icon" avatar): q-icon(:name="icon")
  q-item-section(Zavatar="label!=null")
    slot(name="label"): q-item-label.text-weight-bold {{label}}
  q-item-section(:side="!noside" style="max-width:50%;")
    q-icon.chevron(v-if="to" name="chevron_right")
    template(v-else-if="value") {{value}}
    template(v-else): slot
//-  q-item
  q-item-section(avatar) 
    q-item-label.text-weight-bold Server
  q-item-section
    q-input
</template>

<script>
export default {
  name: 'r-list-item',
  props: {
    color: {
      type: String,
      default: 'secondary'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    noside: {
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
      this.$emit('click')
      //@click="$router.replace(to)" 
    }
  },
}
</script>
<style lang="sass">

// .q-item:not(.q-hoverable) .chevron
//   margin-right -15px
.r-list.r-list-padding
  .q-item.r-item
    // margin-left -15px
    padding-left: 2px !important
    // margin-right -15px
    padding-right: 2px  !important

</style>

