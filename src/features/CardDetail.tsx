import { CardType } from '../utils/type';

type CardDetailProps = {
  card: CardType;
};

export default function CardDetail({ card }: CardDetailProps) {
  return (
    <div className="absolute bg-black/70 inset-[2px] blur-sm shadow-sm"></div>
  );
}
