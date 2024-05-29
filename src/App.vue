<script setup lang="ts">
import PeriodicTableView from './components/PeriodicTableView.vue';
import { usePeriodicTable } from './composables/usePeriodicTable';

const { periodicTableMatrix, toggleShowReversed } = usePeriodicTable();
</script>

<template>
  <header>
    <h1>Periodic Table</h1>
  </header>

  <main>
    <div class="toolbar">
      <button @click="toggleShowReversed">
        Reverse!
      </button>
    </div>
    <PeriodicTableView :items="periodicTableMatrix" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  flex-grow: 1;
}

.toolbar {
  margin-bottom: 1rem;
}
</style>
