<template lang="pug">
.full-height.column(style="min-height: 550px")
  .col( Zstyle="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd")
    q-list.text-weight-medium(dark)
      q-item.q-my-md
        q-item-section.q-ml-md
          q-item-label.q-pl-xs.text-weight-bold User &nbsp;
            q-badge(color="red") 3
      q-list(dark)
        q-item(clickable to="/home" active-class="bg-primary")
          q-item-section.q-ml-md(avatar): q-icon(name="shopping_basket")
          q-item-section Home
        q-separator.q-my-none(spaced="0" inset="item" dark)
        q-item(clickable to="/home" active-class="bg-primary")
          q-item-section.q-ml-md(avatar): q-icon(name="inventory_2")
          q-item-section Page
        q-separator(spaced="0" inset="item" dark)
        q-separator.q-my-sm
        q-item(clickable to="/home" active-class="bg-primary")
          q-item-section.q-ml-md(avatar): q-icon(name="tv")
          q-item-section Dashboard
        q-separator.q-my-sm
        q-separator(spaced="0" inset="item" dark)
        q-item(clickable to="/settings" active-class="bg-primary")
          q-item-section.q-ml-md(avatar): q-icon(name="settings")
          q-item-section Settings
        q-separator(spaced="0" inset="item" dark)
        q-item(clickable to="/manual" disabled active-class="bg-primary")
          q-item-section.q-ml-md(avatar): q-icon(name="contact_support")
          q-item-section Manual

  .text-grey.text-center.text-small.q-pb-lg(dark)    
    img(src='logo.svg' style="height:18px; width:100px; Zmargin-bottom: -2px; opacity:0.8 ")
    
    .text-caption &copy;2021 Version 
      span.text-underline(to="/") {{$version}} 
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapGetters({
      selected: 'server.location',
    }),
  },
  data(){
    return {
      
    }
  },
  methods:{
    select(l) {
      
    }
  }
}
</script>

<style lang="sass">

</style>
