export default {
  props: {
    transform: {
      required: false,
      type: String
    },
    text: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      textDef: undefined
    }
  },
  created () {
    this.initFa()
  },
  methods: {
    initFa () {
      this.faAPI = window.FontAwesome
      this.getTextDef()
    },
    getTextDef () {
      let options = {
        transform: this.getTransform()
      }
      this.textDef = this.faAPI.text(this.text, options)
    },
    getTransform () {
      return this.faAPI.parse.transform(this.transform)
    }
  },
  render (h) {
    const abstract = this.textDef.abstract[0]
    return h(abstract.tag, {
      class: abstract.attributes.class,
      style: abstract.attributes.style,
      domProps: {
        innerHTML: this.text
      }
    })
  },
  watch: {
    transform () {
      this.getTextDef()
    }
  }
}
