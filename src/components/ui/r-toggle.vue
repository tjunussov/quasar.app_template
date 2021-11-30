
<template lang="pug">
q-toggle(dark v-bind="$props" dense)
</template>

<script>



export default {
  name: 'r-toggle',
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      
    }
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

// .q-toggle__track
//   height: 0.6em
//   border-radius: 0.5em

// .q-toggle__thumb
//   top: 0.35em

</style>

