import "./SectionHeader.css";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <header className="SectionHeader">
      {title}
    </header>
  );
};
