<script setup lang="ts">
import type { PeriodicTableItem } from "../types/PeriodicTable";
import { usePeriodicTable } from '../composables/usePeriodicTable';

const { getColorGroup, toggleActiveGroup: setActiveGroup, isElementOrGroupActive } = usePeriodicTable();

type Props = {
  item: PeriodicTableItem;
}

defineProps<Props>();
</script>

<template>
  <div class="element" :class="{ 'element-active': isElementOrGroupActive(item) }" :style="{
    backgroundColor: isElementOrGroupActive(item) ? getColorGroup(item) : 'transparent'
  }" @click="setActiveGroup(item)">
    <p class="element-number">{{ item.atomicNumber }}</p>
    <p class="element-symbol">{{ item.symbol }}</p>
    <p class="element-name">{{ item.name }}</p>
    <p class="element-weight">{{ item.atomicWeight }}</p>
  </div>
</template>

<style scoped>
.element {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  cursor: pointer;

  display: grid;
  gap: 0.2rem;
  justify-content: space-around;
  place-items: center;

  grid-template-areas:
    'element-symbol';
}

.element-number {
  display: none;
  grid-area: element-number;
}

.element-symbol {
  grid-area: element-symbol;
}

.element-name {
  display: none;
  grid-area: element-name;
  font-size: 0.8rem;
}

.element-weight {
  display: none;
  grid-area: element-weight;
}

.element-active {
  color: #000;
}

@container (width > 6ch) {
  .element {
    grid-template-areas:
      'element-number element-number'
      'element-symbol element-symbol';
  }

  .element-number {
    display: block;
  }
}

@container (width > 9.4ch) {
  .element {
    grid-template-areas:
      'element-number element-symbol'
      'element-name element-name';
  }

  .element-name {
    display: block;
  }
}

@container (width > 12ch) {
  .element {
    grid-template-areas:
      'element-number element-symbol'
      'element-name element-name'
      'element-weight element-weight';
  }

  .element-weight {
    display: block;
  }
}
</style>
