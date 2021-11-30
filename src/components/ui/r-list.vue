
<template lang="pug">
.q-px-md.q-py-sm.text-grey.text-weight-medium.text-small {{label}}
q-list.r-list.bg-white(bordered separator Zpadding Zdark :class="{'r-list-padding':nopadding}")
  slot
</template>

<script>



export default {
  inheritAttrs: false,
  name: 'r-list',
  props: {
    label:{
      type: String
    },
    nopadding: {
      type: Boolean,
      default: false
    },
  }
}
</script>
<style lang="stylus">

</style>

