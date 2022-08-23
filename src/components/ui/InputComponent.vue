<template>
  <div class="flex flex-col relative">
    <label class="pb-[9px]">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="onInput"
      :class="{invalid: errorMessage}"
      @blur="blur"
    >
    <small v-if="errorMessage">{{ errorMessage }}</small>
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      required: true
    },
    errorMessage: {
      type: String
    },
    blur: {
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    onInput (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
