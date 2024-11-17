import { CardType } from '../utils/type';
type CardDetailProps = {
  card: CardType;
  imageUrl: string;
};

export default function CardDetail({ card, imageUrl }: CardDetailProps) {
  return (
    <div>
      <img
        src={imageUrl}
        className="brightness-[0.3] contrast-75 rounded-lg shadow-xl shadow-yellow-700 border-orange-900 border-4"
      />
      <div className="backdrop-blur-md bg-white"></div>
    </div>
  );
}
