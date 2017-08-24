export default {
  props: {
    icon: {
      required: true
    },
    prefix: {
      required: false,
      default: 'fa'
    },
    transform: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      foundIcon: undefined,
      booted: false
    }
  },
  computed: {
    prefixIconName () {
      return `${this.prefix} fa-${this.icon}`
    }
  },
  created () {
    // Font Awesome listens for DOMContentLoaded before its API is available on window.
    if (document.readyState !== 'complete' || document.readyState !== 'loaded') {
      document.addEventListener('DOMContentLoaded', this.initFa)
    } else {
      this.initFa()
    }
    
  },
  methods: {
    initFa () {
      this.faAPI = window.FontAwesome
      this.getIconDef()
      this.booted = true // we can now render
      document.removeEventListener('DOMContentLoaded', this.initFa) // no longer needed so remove listener.
    },
    getIconDef () {
      this.iconDef = this.faAPI.parse.iconFromPack(`${this.prefix} ${this.prefixIconName}`)
      let options = {
        transform: this.getTransform()
      }
      this.foundIcon = this.faAPI.icon(this.iconDef, options)
    },
    getTransform () {
      return this.faAPI.parse.transform(this.transform)
    }
  },
  render (h) {
    if (!this.booted) return // only render when we know FontAwesome is done since it listens for DOMContentLoaded
    const abstract = this.foundIcon.abstract[0]
    const children = abstract.children.map((c) => {
      return h(c.tag, {
        key: this.prefixIconName,
        attrs: c.attributes
      })
    })
    const svg = h(abstract.tag, {
      key: this.prefixIconName,
      attrs: abstract.attributes,
      class: abstract.attributes.class
    }, children)
    return svg
  },
  watch: {
    prefixIconName (val) {
      this.getIconDef()
    },
    transform (val) {
      this.getIconDef()
    }
  }
}
