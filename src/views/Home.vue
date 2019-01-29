<template>
  <div>
  <h1 style="margin-top: 10px; margin-bottom: 10px;">All Items</h1>
  <items-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ItemsList from '@/components/ItemsList.vue'

export default Vue.extend({
  name: 'home',
  components: {
    ItemsList
  }
});
</script>
