import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { Item } from "src/types";

import { getPlayerItemPoints } from "./getPlayerItemPoints";

type PlayerItems = Record<Item["name"], { item: Item; amount: number }>;

const PlayerItemsContext = createContext<
  | {
    items: PlayerItems;
    addItem: (item: Item) => void;
    clear: () => void;
  }
  | undefined
>(undefined);

export function PlayerItemsProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<PlayerItems>({});

  const addItem = useCallback((item: Item) => {
    setItems(prevItems => {
      return {
        ...prevItems,
        [item.name]: {
          item,
          amount: (prevItems[item.name]?.amount ?? 0) + 1
        },
      }
    });
  }, []);

  const clear = useCallback(() => {
    setItems({});
  }, []);

  const value = useMemo(
    () => ({
      items,
      addItem,
      clear,
    }),
    [items, addItem, clear]
  );

  return (
    <PlayerItemsContext.Provider value={value}>{children}</PlayerItemsContext.Provider>
  );
}

interface UsePlayerItemsResponse {
  addItem: (item: Item) => void;
  clear: () => void;
  items: PlayerItems;
  bonusPoints: number;
  totalPoints: number;
}

export function usePlayerItems(): UsePlayerItemsResponse {
  const context = useContext(PlayerItemsContext);

  if (context === undefined) {
    throw new Error("usePlayerItems must be used within a PlayerItemsContext.Provider");
  }

  const { bonusPoints, totalPoints } = useMemo(
    () => Object.values(context.items).reduce((accum, curr) => {
      const { bonusPoints, totalPoints } = accum;
      const { item, amount } = curr;

      if (!item.bonus) {
        return { bonusPoints, totalPoints: totalPoints + item.points * amount };
      }

      const pointsWithBonuses = getPlayerItemPoints(item, amount);
      const { bonus, ...itemWithoutBonus } = item;
      const pointsWithoutBonuses = getPlayerItemPoints(itemWithoutBonus, amount);

      return {
        // Bonus points is the points from all bonuses minus what we would get without the bonus
        bonusPoints: bonusPoints + pointsWithBonuses - pointsWithoutBonuses,
        totalPoints: totalPoints + pointsWithBonuses
      };
    }, { bonusPoints: 0, totalPoints: 0 }),
    [context.items]
  );

  return {
    addItem: context.addItem,
    items: context.items,
    clear: context.clear,
    bonusPoints,
    totalPoints,
  }
}
