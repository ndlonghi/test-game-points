import { GameItem } from "src/components";
import { Item } from "src/types";

import './PlayerItem.css';
import { getPlayerItemPoints } from "src/state/getPlayerItemPoints";

interface PlayerItemProps {
  item: Item;
  amount: number;
}

export const PlayerItem: React.FC<PlayerItemProps> = ({
  item,
  amount
}) => {
  const score = getPlayerItemPoints(item, amount);

  return (
    <li className='PlayerItem' aria-label={`Item ${item.name}. Quantity: ${amount}. Score: ${score}`}>
      <GameItem name={item.name} small />
      <span className="PlayerItem-quantity">{amount}</span>
      <span className="PlayerItem-points">{score}</span>
    </li>
  );
};
