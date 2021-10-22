
<template lang="pug">
q-input(dark :filled="flat" :bg-color="flat?'undefined':'dark'" label-slot outlined suffix="Required" v-bind="$props")
  template(v-slot:label) 
    slot
</template>

<script>



export default {
  name: 'r-input',
  props: {
    flat: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: 'white'
    },
    suffix: {
      type: Boolean,
      default: false
    },
  },
}
</script>
<style lang="stylus">

</style>

