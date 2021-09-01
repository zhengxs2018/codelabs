<template>
  <div class="vdn-mobile-simulator">
    <div class="vdn-mobile-simulator__body">
      <div class="vdn-mobile-simulator__viewport">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vdn-mobile-simulator',
}
</script>
