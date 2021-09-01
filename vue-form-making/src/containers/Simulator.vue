<template>
  <component :is="$vdn.SimulatorComponent">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'vdn-simulator',
  inject: ['$vdn'],
}
</script>
