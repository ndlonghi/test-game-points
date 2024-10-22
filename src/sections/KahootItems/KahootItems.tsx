import { SectionHeader } from "src/components";

import { ItemList } from "./components/ItemList";
import "./KahootItems.css"

export const KahootItems: React.FC = () => {
  return (
    <div className="KahootItems">
      <SectionHeader title="Kahoot! Points" />
      <ItemList />
    </div>
  )
};
