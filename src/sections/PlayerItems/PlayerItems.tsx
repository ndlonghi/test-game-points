import { SectionHeader } from "src/components";

import { PlayerItemList } from "./components/PlayerItemList";
import { PlayerPointsSummary } from "./components/PlayerPointsSummary";

import "./PlayerItems.css";

export const PlayerItems: React.FC = () => {
  return (
    <div className="PlayerItems">
      <SectionHeader title="PLAYER ITEMS" />
      <PlayerItemList />
      <PlayerPointsSummary />
    </div>
  )
};
