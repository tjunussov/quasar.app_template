<template lang="pug">
.full-height.column
  .col(Zstyle="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd")
    q-list.menu.q-pa-md
      q-item
        q-item-section
          q-item-label Mümin Taş &nbsp;
            q-badge(color="red") 3
          q-item-label Picker
          //- q-item-label Lock screen
        q-item-section(side)
          q-item-label
            q-badge PRO
      q-separator.q-my-md()
      q-list(Zbordered=''  Zseparator)
        //- q-item(clickable to="/"  :active="true")
        //-   q-item-section(avatar): q-icon(name="home")
        //-   q-item-section Home
        q-item(clickable to="/pick")
          q-item-section(avatar): q-icon(name="shopping_basket")
          q-item-section Picker
        q-item(clickable to="/pack")
          q-item-section(avatar): q-icon(name="inventory_2")
          q-item-section Packer
        q-item(clickable to="/ride")
          q-item-section(avatar): q-icon(name="local_shipping")
          q-item-section Rider
        q-separator.q-my-md()
        q-item(clickable Zto="/analytics" disabled)
          q-item-section(avatar): q-icon(name="tv")
          q-item-section Rider Dashboard
        q-separator.q-my-md()
        q-item(clickable Zto="/staff" disabled)
          q-item-section(avatar): q-icon(name="show_chart")
          q-item-section Reports
        
        q-item(clickable Zto="/settings")
          q-item-section(avatar): q-icon(name="settings")
          q-item-section Admin
        q-item(clickable Zto="/support")
          q-item-section(avatar): q-icon(name="contact_support")
          q-item-section Manual

  .text-grey.text-center.text-small.q-pb-lg(dark)    
    | &copy;2021 Tastamat Ver 
    router-link(to="/") {{$version}} 
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu',
})
</script>
