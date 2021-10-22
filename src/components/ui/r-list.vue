
<template lang="pug">
q-list.r-list(Zbordered separator Zpadding dark :class="{'r-list-padding':nopadding}")
  slot
</template>

<script>



export default {
  name: 'r-list',
  props: {
    nopadding: {
      type: Boolean,
      default: false
    },
  }
}
</script>
<style lang="stylus">

</style>

