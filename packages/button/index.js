import ZnButton from './src/button.vue'

ZnButton.install = Vue => {
  Vue.component(ZnButton.name, ZnButton)
}

export default ZnButton