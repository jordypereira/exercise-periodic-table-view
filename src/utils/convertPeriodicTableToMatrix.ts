import type { PeriodicTable, PeriodicTableMatrix } from "@/types/PeriodicTable";

const amountOfRows = 9;
const amountOfColumns = 18;

export function convertPeriodicTableToMatrix (periodicTable: PeriodicTable): PeriodicTableMatrix {
  const matrix: PeriodicTableMatrix = Array.from({ length: amountOfRows }, () => Array.from({ length: amountOfColumns }, () => null));

  for (const element of periodicTable) {
    matrix[element.row - 1][element.column - 1] = element;
  }

  return matrix;
}
