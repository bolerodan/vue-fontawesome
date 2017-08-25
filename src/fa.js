export default {
  props: {
    icon: {
      required: true,
      type: String
    },
    prefix: {
      required: false,
      type: String,
      default: 'fa'
    },
    transform: {
      required: false,
      type: String
    },
    compose: {
      required: false,
      type: String
    }
  },
  data () {
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
      const iconDef = this.faAPI.parse.iconFromPack(`${this.prefix} ${this.prefixIconName}`)
      let options = {
        transform: this.getTransform(),
        compose: this.getComposition()
      }
      this.foundIcon = this.faAPI.icon(iconDef, options)
    },
    getTransform () {
      return this.faAPI.parse.transform(this.transform)
    },
    getComposition () {
      if (this.compose) {
        return this.faAPI.parse.iconFromPack(this.compose)
      }
    },
    getChildren (children, h) {
      if (!children) return []
      return children.map((c) => {
        let key = `${this.prefixIconName}`
        key = c.attributes ? `${key}-${c.attributes.id}` : key
        return h(c.tag, {
          key: key,
          attrs: c.attributes
        }, this.getChildren(c.children, h))
      })
    }
  },
  render (h) {
    if (!this.booted) return // only render when we know FontAwesome is done since it listens for DOMContentLoaded
    const abstract = this.foundIcon.abstract[0]
    console.log('ABSTRACT', abstract)
    const children = this.getChildren(abstract.children, h)
    const svg = h(abstract.tag, {
      key: this.prefixIconName,
      attrs: abstract.attributes,
      class: abstract.attributes.class
    }, children)
    return svg
  },
  watch: {
    prefixIconName () {
      this.getIconDef()
    },
    transform () {
      this.getIconDef()
    },
    compose () {
      this.getIconDef()
    }
  }
}
