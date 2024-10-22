import { Fragment } from 'react';

import { usePlayerItems } from 'src/state/PlayerItemsContext';

import { PlayerItem } from './PlayerItem';
import './PlayerItemList.css'

export const PlayerItemList: React.FC = () => {
  const { items } = usePlayerItems();

  return (
    <div className='PlayerItemList'>
      <div className='PlayerItemList-header PlayerItemList-divider'>
        <span className='PlayerItemList-header-label'>Item</span>
        <span className='PlayerItemList-header-label'>Qty</span>
        <span className='PlayerItemList-header-label'>Score</span>
      </div>
      <ul className='PlayerItemList-container'>
        {Object.values(items).map((item, index) => (
          <Fragment key={item.item.name}>
            {index !== 0 && <div className='PlayerItemList-divider' />}
            <PlayerItem item={item.item} amount={item.amount} />
          </Fragment>
        ))}
      </ul>
    </div>
  )
};
