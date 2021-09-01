<template>
  <div class="vdn-designer">
    <CompositePanel></CompositePanel>
    <div class="vdn-workspace-panel">
      <slot v-bind="{ mode, schema, $vdn: this }"></slot>
    </div>
    <div v-show="mode === 'design'" class="vdn-settings-panel">设置面板</div>
  </div>
</template>

<script>
import ModeManager from '../mixins/ModeManager'
import SourceManager from '../mixins/SourceManager'
import SimulatorManager from '../mixins/SimulatorManager'

import CompositePanel from '../panels/CompositePanel.vue'

import { generateKey } from '../util'

export default {
  name: 'vdn-designer',
  mixins: [ModeManager, SimulatorManager, SourceManager],
  provide() {
    return {
      $vdn: this,
    }
  },
  props: {
    schema: {
      type: Array,
      default: () => [],
    },
    sources: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentElement: null,
    }
  },
  methods: {
    generateKey,
    activeElement(element) {
      this.currentElement = element
      this.$emit('active-element', element)
    },
  },
  components: {
    CompositePanel,
  },
}
</script>
