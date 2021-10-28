<template lang="pug">
.full-height.column
  .col(Zstyle="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd")
    q-list.text-weight-medium(dark)
      q-item.q-my-md
        q-item-section.q-ml-md
          q-item-label.q-pl-xs.text-weight-bold Mümin Taş &nbsp;
            q-badge(color="red") 3
          //- q-item-label 
            
          q-item-label
            q-chip.q-ma-none(icon-right="keyboard_arrow_down" Zdense text-color="white" color="grey-7") {{menu[selected]}}
                q-menu(square )
                  q-list(separator )
                    q-item(clickable v-close-popup v-for="(n,k ) in menu" :active="selected==n" @click="select(k)")
                      q-item-section
                        q-item-label {{n}}
                   
          //- q-item-label
            q-badge PICKER
      //- q-separator(dark)
      q-list(dark)
        //- q-item(clickable to="/"  :active="true")
        //-   q-item-section(avatar): q-icon(name="home")
        //-   q-item-section Home
        q-item(clickable to="/pick" active-class="bg-indigo-8")
          q-item-section.q-ml-md(avatar): q-icon(name="shopping_basket")
          q-item-section Picker
        q-separator.q-my-none(spaced="0" inset="item" dark)
        q-item(clickable to="/pack" active-class="bg-indigo-8")
          q-item-section.q-ml-md(avatar): q-icon(name="inventory_2")
          q-item-section Packer
        q-separator(spaced="0" inset="item" dark)
        q-item(clickable to="/ride" active-class="bg-indigo-8")
          q-item-section.q-ml-md(avatar): q-icon(name="local_shipping")
          q-item-section Rider
        q-separator.q-my-sm
        q-item(clickable to="/dashboard" active-class="bg-indigo-8")
          q-item-section.q-ml-md(avatar): q-icon(name="tv")
          q-item-section Dashboard
        q-separator.q-my-sm
        q-item(clickable to="/reports" disabled active-class="bg-indigo-8")
          q-item-section.q-ml-md(avatar): q-icon(name="show_chart")
          q-item-section Reports
        q-separator(spaced="0" inset="item" dark)
        q-item(clickable to="/settings" disabled active-class="bg-indigo-8")
          q-item-section.q-ml-md(avatar): q-icon(name="settings")
          q-item-section Admin
        q-separator(spaced="0" inset="item" dark)
        q-item(clickable to="/manual" disabled active-class="bg-indigo-8")
          q-item-section.q-ml-md(avatar): q-icon(name="contact_support")
          q-item-section Manual

  .text-grey.text-center.text-small.q-pb-lg(dark)    
    img(src='/logo_text.svg' style="height:18px; width:100px; Zmargin-bottom: -2px; opacity:0.8 ")
    .text-caption &copy;2021 Version 
      span.text-underline(to="/") {{$version}} 
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { $api } from '../store/services/api'

export default defineComponent({
  name: 'Menu',

  data(){
    return {
      menu:{
        'DEV':'AbuDhabi',
        'demo':'Dubai',
      },
      selected : localStorage.getItem('location') != null ? localStorage.getItem('location') : 'demo'
    }
  },
  methods:{
    select(k) {
      this.selected = $api.location = k;
      localStorage.setItem('location',k)
    }
  }
})
</script>

<style lang="sass">
.text-small 
  font-size: 14px
</style>
