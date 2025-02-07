<template>
  <div class="components-form-input">
    <p class="input-title">{{ title }}</p>
    <a-input-password
      v-if="isPassword"
      :value="modelValue"
      :size="size"
      :placeholder="placeholder"
      @input="update"
    />
    <a-input
      v-else
      :value="modelValue"
      :size="size"
      :placeholder="placeholder"
      @input="update"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  modelValue: string;
  size?: string;
  title?: string;
  placeholder?: string;
  isPassword?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const update = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
<style scoped>
.components-form-input .input-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 3px 0;
}
.components-form-input .ant-input,
.ant-input-password {
  margin: 0 1px 3px 0;
  padding: 10px;
  font-size: 15px;
}
</style>
