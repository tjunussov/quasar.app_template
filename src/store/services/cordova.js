
import { Notify } from 'quasar'

const $cordovaApi = {
   
    printLabel(data) {
        console.debug('print',data);
        window.setTimeout(window.print,500);
    },

    scanOCR() {
        var data = (localStorage.getItem('labelNumber') != null) ? localStorage.getItem('labelNumber') : Math.ceil(Math.random()*100000)
        localStorage.setItem('labelNumber',data) 
        console.debug('scanOCR',data);
        return data;
    },

    scanBarcode() {
        var data = Math.ceil(Math.random()*100000)
        console.debug('scanBarcode',data);
        return data;
    },
}
export default $cordovaApi