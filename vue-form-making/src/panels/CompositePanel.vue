<template>
  <div class="vdn-panel vdn-composite-panel">
    <div class="vdn-panel__header">
      <div class="vdn-panel__title">组件</div>
    </div>
    <div class="vdn-panel__body">
      <DragSource v-for="(source, i) in sources" :source="source" :key="i" />
    </div>
  </div>
</template>

<script>
import DragSource from '../drag-source/DragSource.vue'

export default {
  name: 'vdn-composite-panel',
  inject: ['$vdn'],
  computed: {
    sources({ $vdn }) {
      return $vdn.sources
    },
  },
  components: {
    DragSource,
  },
}
</script>
