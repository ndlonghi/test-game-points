import { Item } from "src/types";

export function getPlayerItemPoints(item: Item, amount: number): number {
  if (!item.bonus) {
    return item.points * amount;
  }

  const bonusCount = Math.floor(amount / item.bonus.amount);
  const looseItemsCount = amount % item.bonus.amount;

  return bonusCount * item.bonus.points + looseItemsCount * item.points
}
