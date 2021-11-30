
<template lang="pug">
q-input(:modelValue="modelValue")
  template(v-slot:prepend)
    q-badge(size="20px" :style="{'backgroundColor':modelValue}")
  template(v-slot:append)
    q-icon(name="colorize" class="cursor-pointer")
      q-popup-proxy(cover transition-show="scale" transition-hide="scale")
        q-color(default-view="palette" flat Zsquare :modelValue="modelValue" @update:modelValue="modelValue = $event;")
</template>

<script>



export default {
  name: 'r-color',
  props: {
    modelValue: {
      type: String,
    },
  },
  data () {
    return {
      
    }
  },
  methods: {
    onClick () {
     
    }
  },
}
</script>
<style lang="sass">

</style>

