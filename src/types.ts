export interface ItemBonus {
  amount: number;
  points: number;
}

export interface Item {
  // name is the Item identifier, so I asume it's unique
  name: string;
  points: number;
  bonus?: ItemBonus;
}
