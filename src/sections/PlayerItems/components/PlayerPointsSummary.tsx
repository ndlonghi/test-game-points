import { usePlayerItems } from 'src/state/PlayerItemsContext';

import './PlayerPointsSummary.css';

export const PlayerPointsSummary: React.FC = () => {
  const { bonusPoints, totalPoints, clear } = usePlayerItems();

  return (
    <div className="PlayerPointsSummary">
      {!!bonusPoints && (
        <div className='PlayerPointsSummary-section PlayerPointsSummary-bonuses'>
          Bonuses: {bonusPoints}
        </div>
      )}
      <div className='PlayerPointsSummary-section PlayerPointsSummary-total-container'>
        <div className='PlayerPointsSummary-points-container' aria-label={`Total: ${totalPoints}`}>
          <span className='PlayerPointsSummary-total-label'>TOTAL</span>
          <span className='PlayerPointsSummary-points'>{totalPoints}</span>
        </div>
        <button onClick={clear}>NEW GAME</button>
      </div>
    </div>
  )
};
