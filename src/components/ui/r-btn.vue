
<template lang="pug">
q-btn(v-if="icon !== null" 
  ref="btn"
  flat 
  round 
  dense 
  :loading="loading"
  :icon="icon"
  :color="color"
  :text-color="textColor" 
  v-on:click.stop="onClick")
  template(v-slot:loading): slot(name="loading")
  slot
q-btn.text-weight-bold.full-width(v-else 
  ref="btn" 
  :loading="_loading"
  :percentage="percentage" 
  size="xl" 
  :color="color" 
  :text-color="disabled?'text-grey':textColor" 
  unelevated 
  no-caps 
  :outline="outline" 
  :disabled="disabled"  
  v-on:click.stop="onClick")
  slot
//- q-btn.full-width(no-caps Zoutline unelevated :color="color" :text-color="textColor" :disabled="disabled" v-on:click="onClick") 
  
</template>

<script>

var tm = null;

import {  mapActions, mapGetters } from 'vuex'

export default {
  inheritAttrs: false,
  name: 'r-btn',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: null
    },
    outline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    pending: {
      type: Boolean,
      default: false
    },
    pendingTime: {
      type: Number,
      default: null
    },
  },
  computed: {
    ...mapGetters(['timeouts']),
  },
  data(){
    return {
      _loading:false,
      percentage: 0,
    }
  },
  watch:{
    // pending(v){
    //   console.log('watch pending',v);
    //   if(v) this.clickDelayed();
    // },
    _loading(v){
      // console.debug('watch _loading',v);
      clearInterval(tm);
      if(v){
        // console.debug('creating interval',this.timeouts.buttonDelay);
        this.percentage = 0;
        tm = setInterval(this.pend,(this.pendingTime||this.timeouts.buttonDelay)/10);
      } 
    }
  },
  mounted(){
    if(!this.icon) this.$bus.$on('dialogcancel',this.clear)
  },
  beforeUnmount(){
    if(!this.icon) this.$bus.$off('dialogcancel',this.clear);
  },
  emits:['click'],
  methods: {
    clickDelayed(){
      if(this.timeouts.buttonDelay) 
        this._loading = true;
      else // if delay is zero, imediatly submit
        this.onClick();
      this.$bus.$emit('dialogshow');
    },
    pend(){
      // console.debug('pend',this.percentage);
      this.percentage = Math.min(100, this.percentage+= 10 );

      if(this.percentage == 100){
        this.clear();
        this.onClick();
      }
    },
    clear(){
      if(this._loading){
        // console.debug('rbt clearning');
        this._loading = false;

        /// TODO WHY WE NEED TO AUTO CONTINUET?????????????????????????
        // this.$bus.$emit('dialoghide');
      }
    },
    onClick () {
      // console.log('onClick');
      if(this._loading){ 
        this.clear();  
        // console.log('focre cancel');
      }
      else {
        this.$emit('click',(a)=>{
          console.log('emitted click callback',a);
        })
        
      }
    }
  },
  // computed: {
  //   shape () {
  //     return `q-btn-${this.round ? 'round' : 'rectangle'}`
  //   },
  //   btnClasses () {
  //     let cls = [ this.shape, 'btn-image inline relative-position' ]
  //     cls.push(`bg-${this.color}`)
  //     if (this.outline) {
  //       cls.push('q-btn-outline')
  //     }
  //     return cls
  //   },
  //   imgStyles () {
  //     let stls = [
  //       {width: `${this.size - 5}px`},
  //       {height: `${this.size - 5}px`},
  //       {padding: this.round ? '2px 2px 0 2px' : '0'}
  //     ]
  //     if (this.round) {
  //       stls.push({ borderRadius: '50%' })
  //     }
  //     return stls
  //   },
  //   btnStyles () {
  //     let stls = [
  //       {width: `${this.size}px`},
  //       {height: `${this.size}px`},
  //       {borderColor: `${this.outlineColor}`}
  //     ]
  //     return stls
  //   }
  // },
}
</script>
<style lang="stylus">

</style>

