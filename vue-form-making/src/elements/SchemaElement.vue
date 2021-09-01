<template>
  <div
    class="vdn-schema-element"
    :class="{ 'is-active': isActive }"
    @click.prevent.stop="handleClick()"
  >
    <!-- 虚线盒子 -->
    <div class="vdn-schema-element__dash-box"></div>
    <div class="vdn-schema-element__content">
      <component
        :is="getDragSourceComponent(schema.type)"
        v-bind="componentOptions"
      >
        <RecursionElement :parent="schema" :children="schema.children" />
      </component>
    </div>
    <div class="vdn-schema-element__bottom">
      <!-- 辅助工具 -->
      <div v-show="isActive" class="vdn-auxtool vdn-auxtool--bottom">
        <button class="vdn-aux-btn vdn-aux-selector" @click.prevent.stop>
          {{ getDragSourceTitle(schema.type) }}
        </button>
        <button
          v-if="allowClone"
          class="vdn-aux-btn vdn-aux-clone-btn"
          @click.prevent.stop="$emit('clone')"
        >
          克隆
        </button>
        <button
          v-if="allowRemove"
          class="vdn-aux-btn vdn-aux-remove-btn"
          @click.prevent.stop="$emit('remove')"
        >
          删除
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDragSourceTitle,
  getDragSourceComponent,
} from '../mixins/SourceManager'

export default {
  name: 'vdn-schema-element',
  inject: ['$vdn'],
  props: {
    schema: {},
    allowClone: {
      type: Boolean,
      default: true,
    },
    allowRemove: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isActive({ $vdn }) {
      return $vdn.currentElement === this
    },
    componentOptions({ schema }) {
      const newProps = {}

      Object.keys(schema).forEach(key => {
        if (key === 'is' || key === 'children' || key === 'key') return
        newProps[key] = schema[key]
      })

      return newProps
    },
  },
  methods: {
    getDragSourceTitle,
    getDragSourceComponent,
    handleClick() {
      this.$vdn.activeElement(this)
    },
  },
  components: {
    RecursionElement: () => import('./RecursionElement.vue'),
  },
}
</script>
