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
    <>
      <div
        className="absolute bg-black/70 inset-[2px] blur-sm shadow-sm"
        onClick={onCardDetailClick}
      ></div>

      <ul className="absolute top-10 left-10 text-zinc-100">
        <li className="pb-1">{card.name}</li>
        <li className="pb-1">{card.roastery}</li>
      </ul>
    </>
  );
}
