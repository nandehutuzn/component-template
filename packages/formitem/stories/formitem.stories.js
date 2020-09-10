import ZnFormitem from '../src/formitem.vue'

export default {
  title: 'ZnFormitem',
  component: ZnFormitem
}

export const Formitem = _ => ({
  components: { ZnFormitem },
  template: `
    <div>
      <zn-formitem></zn-formitem>
    </div>
  `
})