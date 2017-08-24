<template>
  <div id="app">
      <div style="margin-bottom: 20px;">
          <p>{{ message }}</p>
          <select v-model="icon">
            <option v-for="icon in icons">{{icon}}</option>
          </select>
          <select v-model="transform">
            <option value="">None</option>
            <option v-for="t in transforms">{{t}}</option>
          </select>
          <select v-model="prefix">
            <option v-for="p in prefixList">{{p}}</option>
          </select>
      </div>
      <fa :icon="icon" :transform="transform" :prefix="prefix" class="fa-5x"></fa>
      <fa icon="leaf"  class="fa-5x fa-spin" style="color: green;"></fa>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Hello Font Awesome!',
        icons: ['address-book', 'adjust', 'angle-double-right'],
        transforms: ['rotate-90', 'left-9', 'up-8'],
        transform: undefined,
        icon: 'address-book',
        prefix: 'fa',
        prefixList: ['fa', 'fal', 'far', 'fas']
      }
    }
  }
</script>
