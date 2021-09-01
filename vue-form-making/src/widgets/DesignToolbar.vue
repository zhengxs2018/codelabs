<template>
  <div class="vdn-design-toolbar">
    <div>
      <button @click="$vdn.setSimulator('pc')">pc</button>
      <button @click="$vdn.setSimulator('mobile')">mobile</button>
    </div>
    <div>
      <button @click="$vdn.setMode('preview')">预览</button>
      <button @click="$vdn.setMode('design')">设计</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vdn-design-toolbar',
  inject: ['$vdn'],
}
</script>
