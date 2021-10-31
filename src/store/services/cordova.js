import { $sound } from '../../store/services/sound'
import { Dialog, Platform  } from 'quasar'

const $cordovaApi = {
   
    printLabel(address,data) {
      $sound.print();
      return new Promise((resolve, reject) => {
        window.cordova.plugins.printer.print(resolve,
          (error) => {
            reject("Printing failed: " + error);
          },
          address,
          data)
      })
    },

    printerList() {
      return new Promise((resolve, reject) => {
        window.cordova.plugins.printer.list(resolve,
          (error) => {
            reject("Printer List failed: " + error);
          })
      })
    },

    scanOCR(type,mock) {
      return new Promise((resolve, reject) => {
        window.cordova.plugins.ocr.scan(resolve,
          (error) => {
            reject("Scanning failed: " + error);
          },
          { 
            ocrType: type,
            aspectRatio: 1,
            mock
          })
      })
    },

    scanBarcode(mock) {
      return new Promise((resolve, reject) => {
        window.cordova.plugins.barcodeScanner.scan(resolve,
          (error) => {
            reject("Scanning failed: " + error);
          },
          {
              preferFrontCamera : false, // iOS and Android
              showFlipCameraButton : true, // iOS and Android
              showTorchButton : true, // iOS and Android
              torchOn: false, // Android, launch with the torch switched on (if available)
              saveHistory: false, // Android, save scan history (default false)
              prompt : "Place a barcode inside the scan area", // Android
              resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
              formats : "EAN_13", // default: all but PDF_417 and RSS_EXPANDED
              orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
              disableAnimations : true, // iOS
              disableSuccessBeep: false, // iOS and Android
              mock
          }
        );
      })
    },
}


console.debug('useQuasar.Platform',Platform.is);

// Simulating cordova

if(!Platform.is.cordova) {

  window.cordova = { 
    plugins: { 
      barcodeScanner: {
        scan: function(result,error,cfg){
          var data = cfg.mock.defaultValue||scanMockValue(cfg.mock.label);
          mockCameraUI(result,error,data,cfg);
        }
      },
      ocr : {
        scan : function(result,error,cfg){
          var data = {
            text:cfg.mock.defaultValue||scanMockValue(cfg.mock.label),
            raw:'989079909 351 PM 583071708 OD 7 Days Chocolate Croissant 55 Gm AED 1.90 Almarai Milk Premium Mango 250 M o/n AED 2.65 Almarai Milk Premium Strawberry 250 MI 0/2 AED 2.60'
          };
          cfg.type = 'ocr'
          mockCameraUI(result,error,data,cfg);
        }
      },
      printer: {
        print: function(result,error,address,data){
          console.debug('mock cordova print',address,data);
          window.setTimeout(()=>{
            window.print();
            result();
          },500);
        },
        list: function(result,error,data){
          console.debug('mock cordova printList',data);
          window.setTimeout(()=>{
            result([
              {
                  address: "18:04:ED:6B:13:D4",
                  name: "XXRBJ200701857"
              },
              {
                  address: "18:04:ED:6B:13:D4",
                  name: "Bluetooth Printer"
              }
          ]);
          },500);
        },

      },
    }
  }
};


function mockCameraUI(result,error,data,cfg){
  let seconds = 1
  // console.debug('mockCamera',data);

  const timer = setInterval(() => {
      seconds--

      if (seconds == 0) {
        dialog.update({
          message: `Scanned code ${data && data.text?data.text:data} <code>${data.raw?''+data.raw+'</code>':''} `
        });
        clearInterval(timer)
        setTimeout(dialog.hide,1000);
        result(data);
        $sound.scaned();
      }
    }, 1000)

  const dialog = Dialog.create({
      title: `${cfg.mock.label} ${cfg.type||'barcode'} scanner`,
      message: 'Scanning ...',
      html: true
  }).onOk(() => {
    clearInterval(timer)
    result(data);
  });

}

function scanMockValue(name){
    var data = (localStorage.getItem(name) != null) ? localStorage.getItem(name) : String(Math.ceil(Math.random()*100000))
    localStorage.setItem(name,data);
    return data;
}

export default $cordovaApi