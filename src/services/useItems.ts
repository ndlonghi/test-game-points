import { Item } from "src/types";

/**
 * This function is hardcoded for now, but this is the place to fetch the items in the future
 */
export function useItems(): Item[] {
  return [
    {
      name: "A",
      points: 50,
      bonus: {
        amount: 3,
        points: 200,
      },
    },
    {
      name: "B",
      points: 30,
      bonus: {
        amount: 2,
        points: 90,
      },
    },
    {
      name: "C",
      points: 20,
    },
    {
      name: "D",
      points: 15,
    },
    {
      name: "E",
      points: 0,
    },
  ];
}
