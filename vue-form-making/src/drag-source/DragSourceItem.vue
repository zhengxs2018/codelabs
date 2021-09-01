<template>
  <div class="vdn-drag-source-item">
    <span class="vdn-drag-source-item__text">
      {{ item.title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'vdn-drag-source-item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
