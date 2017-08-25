import Fa from './fa.js'
import FaText from './fatext.js'

const VueFa = Vue => {
  Vue.component('fa', Fa)
  Vue.component('fa-text', FaText)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFa)
}

export default VueFa
