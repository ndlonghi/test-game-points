import { KahootItems, PlayerItems } from 'src/sections';
import { PlayerItemsProvider } from 'src/state/PlayerItemsContext';

import './App.css';

function App() {
  return (
    <PlayerItemsProvider>
      <div className="App">
        <KahootItems />
        <PlayerItems />
      </div>
    </PlayerItemsProvider>
  );
}

export default App;
