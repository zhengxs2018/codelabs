<template>
  <Draggable
    :list="children"
    class="vdn-recursion-element"
    group="vdn-drag-area"
    ghost-class="vdn-drag-source-item--ghost"
    :animation="200"
    :sort="false"
    @add="handleAdd"
  >
    <SchemaElement
      v-for="(item, index) in children"
      :schema="item"
      :key="item.key"
      @clone="handleClone(item, index)"
      @remove="handleRemove(item, index)"
    >
    </SchemaElement>
  </Draggable>
</template>

<script>
import { cloneDeep, omit } from 'lodash'
import Draggable from 'vuedraggable'

import SchemaElement from './SchemaElement.vue'

export default {
  name: 'vdn-recursion-element',
  inject: ['$vdn'],
  props: {
    parent: Object,
    children: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    cloneAndCreate(data) {
      return {
        ...cloneDeep(data),
        children: [],
        key: this.$vdn.generateKey(),
      }
    },
    handleAdd(event) {
      const $vdn = this.$vdn
      const list = this['children']
      const index = event.newIndex
      const dragSource = list.splice(index, 1)[0]
      let schema
      if (typeof dragSource.onAdd === 'function') {
        schema = dragSource.onAdd($vdn)
      } else {
        schema = cloneDeep(dragSource.schema)
      }

      schema.type = dragSource.name
      schema.key = $vdn.generateKey()
      schema.children = []

      list.splice(index, 0, schema)
    },
    handleClone(oldSchema, index) {
      const $vdn = this.$vdn
      const dragSource = $vdn.getDragSource(oldSchema.type)

      let schema
      if (typeof dragSource.onClone === 'function') {
        schema = dragSource.onClone(oldSchema, $vdn)
      } else {
        schema = cloneDeep(omit(oldSchema, 'children'))
      }

      schema.key = $vdn.generateKey()
      schema.children = []

      this.children.splice(index + 1, 0, schema)
    },
    handleRemove(_, index) {
      this.children.splice(index, 1)
    },
  },
  components: {
    Draggable,
    SchemaElement,
  },
}
</script>
