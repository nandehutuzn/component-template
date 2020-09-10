import ZnForm from '../src/form.vue'

export default {
  title: 'ZnForm',
  component: ZnForm
}

export const Form = _ => ({
  components: { ZnForm },
  template: `
    <div>
      <zn-form></zn-form>
    </div>
  `
})