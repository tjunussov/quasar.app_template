import { $sound } from '../../store/services/sound'

const $cordovaApi = {
   
    printLabel(data) {
        console.debug('print',data);
        $sound.scanBegin();
        window.setTimeout(window.print,500);
    },

    scan(type,label,defaultValue){
        var data = defaultValue||mockScan(label);
        console.debug('scan',data);
        $sound.scanBegin();
        return data;
    },

    scanOCR() {
        var data = mockScan('labelNumber');
        console.debug('scanOCR',data);
        $sound.scanBegin();
        return data;
    },

    scanBarcode() {
        var data = mockScan('trackingNumber');
        console.debug('scanBarcode',data);
        $sound.scanBegin();
        return data;
    },
}

function mockScan(name){
    var data = (localStorage.getItem(name) != null) ? localStorage.getItem(name) : String(Math.ceil(Math.random()*100000))
    localStorage.setItem(name,data);
    return data;
}

export default $cordovaApi