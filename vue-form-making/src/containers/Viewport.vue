<template>
  <div class="vdn-viewport">
    <Simulator>
      <RootElement />
    </Simulator>
  </div>
</template>

<script>
import RootElement from '../elements/RootElement.vue'

import Simulator from './Simulator.vue'

export default {
  name: 'vdn-viewport',
  inject: ['$vdn'],
  components: {
    RootElement,
    Simulator,
  },
}
</script>
