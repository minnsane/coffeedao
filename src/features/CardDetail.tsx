import { CardType } from '../utils/type';

type CardDetailProps = {
  card: CardType;
  onCardDetailClick: () => void;
};

export default function CardDetail({
  card,
  onCardDetailClick,
}: CardDetailProps) {
  return (
    <div
      className="absolute bg-black/70 inset-[2px] blur-sm shadow-sm"
      onClick={onCardDetailClick}
    ></div>
  );
}
