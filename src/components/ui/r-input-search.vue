
<template lang="pug">
q-input(dark bg-color="bg-grey-9" filled placeholder="Search" v-bind="$props")
      template(v-slot:prepend)
        q-icon(v-if="search === ''" name="search")
        q-icon(v-else name="clear" class="cursor-pointer" @click="search = ''")
      template(v-slot:append)
        q-icon(name="qr_code")
</template>

<script>



export default {
  name: 'r-input-search',
  data () {
    return {
      search: ''
    }
  },
}
</script>
<style lang="stylus">

</style>

