/**
 * @example 
 * {
    "name": "Hydrogen",
    "atomicNumber": 1,
    "symbol": "H",
    "atomicWeight": "1.008",
    "block": "s",
    "row": 1,
    "column": 1
  }
 */
export type PeriodicTableItemBlock = 's' | 'p' | 'd' | 'f';
export type PeriodicTableItem = {
  name: string;
  atomicNumber: number;
  symbol: string;
  atomicWeight: string;
  block: PeriodicTableItemBlock;
  row: number;
  column: number;
};

export type PeriodicTable = PeriodicTableItem[];

export type PeriodicTableBlockColorMapping = {
  [key in PeriodicTableItemBlock]: string;
};

export type PeriodicTableMatrix = (PeriodicTableItem | null)[][];

