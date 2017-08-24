import Fa from './fa.js'

const VueFa = Vue => {
  Vue.component('fa', Fa)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFa)
}

export default VueFa