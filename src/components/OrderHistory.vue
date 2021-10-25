<template lang="pug">
q-slide-transition(:duration="500")
  q-list.text-primary(separator v-show="hist && hist.created")
    q-slide-item(@right="onRight" right-color="red")
      template(v-slot:right)
        q-icon(name="clear")
      q-item( clickable v-ripple @click="$emit('open',hist)")
        //- q-item-section(avatar)
          q-btn(outline round dense color="white" text-color="primary" icon="local_shipping")
        q-item-section.q-pl-sm(v-if="hist && hist.created")
            q-item-label.text-h6.text-weight-bold Order \#{{hist.labelNumber}}
            q-item-label.text-grey Pick up by {{hist.created}}
        q-item-section(side top)
            r-btn(icon="more_vert")
</template>

<script>

export default {
  name: 'OrderHistory',
  props: {
    hist: Object
  },
  emits:['open','clear'],
  methods:{
    onRight ({ reset }) {
      this.$emit('clear');
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
