<template lang="pug">
q-item.ticket.no-border-radius.q-pa-none(unelevated Zoutline)
  q-item-section.q-pa-md.q-px-md(avatar)
    q-item-label.text-h5
      span.text-grey-8 {{String(t.trackingNumber).substr(0,String(t.trackingNumber).length - 4)}} 
      span.text-weight-bold.q-ml-xs {{String(t.trackingNumber).substr(-4)}}
      //- q-chip.text-h6.q-ml-xs(color="primary" text-color="grey") \#{{String(t.trackingNumber).substr(-4)}}
    q-item-label.text-grey-6.text-small
      q-icon(name="schedule")
      | {{$format(t.created,'HH:mm')}}
  q-item-section
  q-item-section.bg-grey-9.q-pl-none(side Ztop)    
    q-item-label.text-h6.q-pr-lg
      q-icon.ticket-arrow(name="arrow_right" size="54px") 
      span( color="black" text-color="white" outline dense size="lg") {{t.cellCode?t.cellCode:'WAIT...'}}    
</template>

<script>

export default {
  name: 'DashboardTicket',
  props:['t']
};

</script>

<style lang="sass">

.ticket 
  min-width: 300px

</style>
