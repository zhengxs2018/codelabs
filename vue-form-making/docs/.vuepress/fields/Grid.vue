<template>
  <el-row>
    <el-col
      class="grid-column"
      v-for="column in columns"
      :span="column.span"
      :key="column.key"
    >
      <vdn-recursion-element :children="column.children" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'grid',
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.grid-column {
  border: 1px dashed #ddd;
  box-sizing: border-box;
}
</style>
