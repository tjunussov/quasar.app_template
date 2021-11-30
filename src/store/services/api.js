import { $http } from 'boot/axios'
import { $bus } from 'boot/bus'
// import { Notify } from 'quasar'
import { Dialog as Notify } from 'boot/dialog'
import { $sound } from '@/store/services/sound'
import store from '@/store'

function handleError(error) {
    const errorMessage = error
                        && error.response
                        && error.response.data
                        && error.response.data.message
      ? error.response.data.message
      : 'Произошла ошибка ' + error
    // console.error(errorMessage)

    const details = error?.response?.data?.meta?.CURRENT_CELL;

    if(error && error.response.data.code == 'INVALID_ORDER'){
      Notify.create({type: 'warning', title:'Warning',message: errorMessage, details, timeout:1000})
      return Promise.reject(errorMessage=='SCAN AGAIN'?'Wrong order number' + (error?.response?.data?.trackingNumber||'') +', scan again':errorMessage);
    } else {
      $bus.$emit('dialogcancel'); // canceling all automations
      Notify.create({type: 'negative',message: errorMessage, details})
      return Promise.reject(error)
    }
}

const instoreApi = {
    raw: null,
    location:null,
    test(param) {

      // if(!this.location) this.location = store.getters.server.location;

      return $http.post(`url`,param)
        .then((resp)=>resultBuilder(param,resp))
        .catch((error) => handleError(error) )
    },
}

const $api = process.env.CORDOVA === 'true' ? instoreApi : instoreApi

function resultBuilder(param,resp){
  // $sound.track();

  resp = resp.data;
  
  var p = {type: 'positive',message:resp, resp};

  if(!param.disableNotify) resp.notify = Notify.create(p);

  return resp;
}

export { $api }
export default $api