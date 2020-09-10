import ZnInput from '../src/input.vue'
import ZnButton from '../../button/src/button.vue'

export default {
  title: 'ZnInput',
  component: ZnInput
}

export const Text = () => ({
  components: { ZnInput },
  template: `
    <zn-input v-model="value"></zn-input>
  `,
  data(){
    return {
      value: 'admin'
    }
  }
})

export const Input = _ => ({
  components: { ZnInput, ZnButton },
  template: `
    <div>
      <zn-input></zn-input>
      <zn-button>zn-button</zn-button>
    </div>
  `
})

export const Password = () => ({
  components: { ZnInput },
  template: `
    <zn-input v-model="value" type="password"></zn-input>
  `,
  data(){
    return {
      value: 'admin'
    }
  }
})