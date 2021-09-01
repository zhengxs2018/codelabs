<template>
  <div
    class="vdn-schema-element vdn-root-element"
    :class="{ 'is-active': isActive }"
    @click.prevent.stop="handleClick"
  >
    <div class="vdn-schema-element__top">
      <div v-show="isActive" class="vdn-auxtool vdn-auxtool--top">
        <button class="vdn-aux-btn vdn-aux-selector" @click.prevent.stop>
          根
        </button>
      </div>
    </div>
    <div class="vdn-schema-element__content vdn-root-element__content">
      <RecursionElement :children="schema" style="height: 100%" />
    </div>
  </div>
</template>

<script>
import RecursionElement from './RecursionElement.vue'

export default {
  name: 'vdn-root-element',
  inject: ['$vdn'],
  computed: {
    schema({ $vdn }) {
      return $vdn.schema
    },
    isActive({ $vdn }) {
      return $vdn.currentElement === this
    },
  },
  created() {
    this.$vdn.activeElement(this)
  },
  methods: {
    handleClick() {
      this.$vdn.activeElement(this)
    },
  },
  components: {
    RecursionElement,
  },
}
</script>
