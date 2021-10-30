import { boot } from 'quasar/wrappers'
import { Dialog as QDialog } from 'quasar'
import DialogView from 'src/components/ui/r-dialog.vue'


const Dialog = {
  create(params){
    return QDialog.create({
      component: DialogView,
      componentProps: params
    })
  }
};




export default boot(async (/* { app, router, ... } */) => {
  // something to do
})

export { Dialog }
