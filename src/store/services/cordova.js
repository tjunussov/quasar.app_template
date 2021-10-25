import { $sound } from '../../store/services/sound'
import { Dialog } from 'quasar'

const $cordovaApi = {
   
    printLabel(data) {
        console.debug('print',data);
        $sound.scanBegin();
        window.setTimeout(window.print,500);
    },

    scan(type,label,defaultValue){
        return new Promise((resolve, reject) => {
            var data = defaultValue||scanMockValue(label);

            console.debug('scan',data);
            let seconds = 1
            const timer = setInterval(() => {
                seconds--
        
                if (seconds == 0) {
                  dialog.update({
                    message: `Scanned code ${data}`
                  });
                  clearInterval(timer)
                  setTimeout(dialog.hide,500);
                  resolve(data);
                  $sound.scaned();
                }
              }, 1000)

            const dialog = Dialog.create({
                title: `${label} ${type} scanner`,
                message: 'Scanning ...'
            }).onOk(() => {
              clearInterval(timer)
              resolve(data);
            });
        });
    },

    /* scanOCR() {
        var data = scanMockValue('labelNumber');
        console.debug('scanOCR',data);
        $sound.scanBegin();
        return data;
    }, */

    // scanBarcode() {
    //     var data = scanMockValue('trackingNumber');
    //     console.debug('scanBarcode',data);
    //     $sound.scanBegin();
    //     return data;
    // },
}

function scanMockValue(name){
    var data = (localStorage.getItem(name) != null) ? localStorage.getItem(name) : String(Math.ceil(Math.random()*100000))
    localStorage.setItem(name,data);
    return data;
}

export default $cordovaApi