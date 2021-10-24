import { $http } from 'boot/axios'
import { Notify } from 'quasar'

const $cordovaApi = {
   
    printLabel(data) {
        console.debug('print',data);
    },

    scanOCR() {
        var data = 'test'
        console.debug('scanOCR',data);
        return data;
    },

    scanBarcode() {
        var data = 'test'
        console.debug('scanBarcode',data);
        return data;
    },
}
export default $cordovaApi