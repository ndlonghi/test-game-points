import { GameItem } from 'src/components';
import { useItems } from 'src/services/useItems';
import { usePlayerItems } from 'src/state/PlayerItemsContext';

import "./ItemList.css";

export const ItemList: React.FC = () => {
  const items = useItems();
  const { addItem } = usePlayerItems();

  return (
    <div className='ItemList'>
      <h1>Items</h1>
      <div className='ItemList-content'>
        {items.map(item => (
          <GameItem key={item.name} name={item.name} onClick={() => addItem(item)} />
        ))}
      </div>
    </div>
  );
};
