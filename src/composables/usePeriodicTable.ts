import { convertPeriodicTableToMatrix } from "@/utils/convertPeriodicTableToMatrix";
import { computed, ref, } from "vue";
import periodicTable from "@/assets/data/periodic-table-data.json";

import { periodicTableBlockColorMapping } from "@/assets/data/periodic-table-block-color-mapping";
import type { PeriodicTable, PeriodicTableItem, PeriodicTableItemBlock, PeriodicTableMatrix } from "@/types/PeriodicTable";

const activeGroup = ref<PeriodicTableItemBlock | null>(null);
const activeElement = ref<PeriodicTableItem | null>(null);
const showReversed = ref(false);

export function usePeriodicTable () {
  const convertedPeriodicTableMatrix = computed<PeriodicTableMatrix>(() => convertPeriodicTableToMatrix(periodicTable as PeriodicTable))

  const reversedPeriodicTableMatrix = computed<PeriodicTableMatrix>(() => {
    // @ts-expect-error Check if browser supports toReversed()
    if (Array.prototype.toReversed) {
      return convertedPeriodicTableMatrix.value.toReversed();
    }

    return convertedPeriodicTableMatrix.value.slice().reverse();
  })


  const periodicTableMatrix = computed<PeriodicTableMatrix>(() => {
    if (showReversed.value) {
      return reversedPeriodicTableMatrix.value;
    }

    return convertedPeriodicTableMatrix.value;
  });

  function getColorGroup (item: PeriodicTableItem) {
    return periodicTableBlockColorMapping[item.block];
  }

  function isGroupActive (item: PeriodicTableItem) {
    return activeGroup.value === item.block;
  }

  function isElementActive (item: PeriodicTableItem) {
    return activeElement.value?.atomicNumber === item.atomicNumber;
  }

  function isElementOrGroupActive (item: PeriodicTableItem) {
    return isGroupActive(item) || isElementActive(item);
  }

  function toggleActiveGroup (item: PeriodicTableItem) {
    if (isElementOrGroupActive(item)) {
      activeGroup.value = null;

      if (isElementActive(item)) {
        activeElement.value = null;

        return
      }

      activeElement.value = item;

      return;
    }

    activeGroup.value = item.block;
  }

  function toggleShowReversed () {
    showReversed.value = !showReversed.value;
  }

  return {
    activeGroup,
    showReversed,
    periodicTable,
    periodicTableMatrix,

    getColorGroup,
    isElementOrGroupActive,
    toggleActiveGroup,
    toggleShowReversed
  };
}
