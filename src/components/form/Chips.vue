<template>
  <div class="flex flex-wrap gap-2" :role="multiple ? 'group' : 'radiogroup'" :aria-labelledby="labelledby">
    <button
      v-for="o in normalized"
      :key="o.value"
      type="button"
      :role="multiple ? 'checkbox' : 'radio'"
      :aria-checked="isOn(o.value)"
      class="rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors"
      :class="isOn(o.value)
        ? 'border-primary bg-primary/10 text-primary'
        : 'border-stone-300 text-stone-700 hover:border-stone-400 dark:border-stone-600 dark:text-stone-200'"
      @click="toggle(o.value)"
    >
      {{ o.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Option = string | { value: string; label: string }
const props = defineProps<{ modelValue: string | string[]; options: Option[]; multiple?: boolean; labelledby?: string }>()
const emit = defineEmits<{ 'update:modelValue': [string | string[]] }>()

const normalized = computed(() => props.options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o)))
const isOn = (v: string) => (Array.isArray(props.modelValue) ? props.modelValue.includes(v) : props.modelValue === v)

function toggle(v: string) {
  if (props.multiple) {
    const list = Array.isArray(props.modelValue) ? props.modelValue : []
    emit('update:modelValue', list.includes(v) ? list.filter((x) => x !== v) : [...list, v])
  } else {
    emit('update:modelValue', props.modelValue === v ? '' : v)
  }
}
</script>
