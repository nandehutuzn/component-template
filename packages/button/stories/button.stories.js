import ZnButton from '../src/button.vue'

export default {
  title: 'ZnButton',
  component: ZnButton
}

export const Button = _ => ({
  components: { ZnButton },
  template: `
    <div>
      <zn-button>按钮</zn-button>
    </div>
  `
})