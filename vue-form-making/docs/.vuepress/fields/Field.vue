<template>
  <el-form-item :label="label">
    <el-input :placeholder="placeholder" />
  </el-form-item>
</template>

<script>
export default {
  name: 'Field',
  props: {
    label: String,
    placeholder: String,
  },
}
</script>
