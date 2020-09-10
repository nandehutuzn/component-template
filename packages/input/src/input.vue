<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'ZnInput',
  inheritAttrs: false,
  props: {
    value: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput(evt) {
      this.$emit('input', evt.target.value)
      const findParent = parent => {
        while(parent) {
          if(parent.$options.name === 'ZnFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }

        return parent
      }

      const parent = findParent(this.$parent)
      if(parent) {
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style scoped>
</style>