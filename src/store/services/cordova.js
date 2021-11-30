import { $sound } from '@/store/services/sound'
import store from '@/store'
import { $bus } from 'boot/bus'
import { Notify } from 'quasar'

function handleError(error) {
  $bus.$emit('dialogcancel');
  if(error) Notify.create({type: 'negative',message: error})
}

const $cordovaApi = {

    test() {
      return "test";
    },
}


export default $cordovaApi
