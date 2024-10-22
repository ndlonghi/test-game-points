import './GameItem.css';

interface GameItemProps {
  name: string;
  small?: boolean;
  onClick?: () => void;
}

type ContainerType = React.FC<{ children: React.ReactNode; className: string; onClick?: () => void; }>;

export const GameItem: React.FC<GameItemProps> = ({ name, small, onClick }) => {
  const Container: ContainerType = (props) => onClick ? <button {...props} /> : <div {...props} />;

  return (
    <Container className={`GameItem ${small ? 'GameItem-small' : ''}`} onClick={onClick}>
      {name}
    </Container>
  )
};
