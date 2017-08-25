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
      <div>
        <fa :icon="icon" :transform="transform" :prefix="prefix" class="fa-5x"></fa>
        <fa icon="leaf"  class="fa-5x fa-spin" style="color: green;"></fa>
      </div>
      <h3>Composition</h3>
      <div style="margin-bottom: 20px;">
        <select v-model="compose">
          <option v-for="c in composeList">{{c}}</option>
        </select>
      </div>
      <div>
        <fa icon="pencil" transform="shrink-10" :compose="compose" style="font-size:2em; color: #5195cf;"></fa>
      </div>
      <h3>Text</h3>
      <fa icon="calendar" style="font-size: 2em;">12</fa>
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
        prefixList: ['fa', 'fal', 'far', 'fas'],
        composeList: ['fa fa-comment', 'fa fa-circle', 'fa fa-square'],
        compose: 'fa fa-comment'
      }
    }
  }
</script>
