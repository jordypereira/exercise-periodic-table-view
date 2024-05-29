<script setup lang="ts">
import PeriodicTableViewElement from './PeriodicTableViewElement.vue';
import type { PeriodicTableMatrix } from "../types/PeriodicTable";

type Props = {
  items: PeriodicTableMatrix;
}

defineProps<Props>();
</script>

<template>
  <section class="grid">
    <template v-for="(row, ridx) in items">
      <template v-for="(element, cidx) in row" :key="`row-${ridx}-col-${cidx}`">
        <div class="cell">
          <PeriodicTableViewElement v-if="element" :item="element" :key="element.atomicNumber" />
        </div>
      </template>
    </template>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(18, 1fr);
  gap: 0.3rem;
  width: 100%;
  box-sizing: border-box;
}

.cell {
  container-type: inline-size;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 1 / 1;
  overflow: auto;
}
</style>
