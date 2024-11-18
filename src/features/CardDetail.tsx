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
      <div className="absolute inset-10">
        <div className="grid grid-cols-3 gap-2">
          {card.countries.map((country) => (
            <img
              key={country.code}
              src={`https://flagsapi.com/${country.code}/flat/64.png`}
            />
          ))}
        </div>

        <ul className="text-zinc-100">
          <li className="pb-1">{card.name}</li>
          <li className="pb-1">{card.roastery}</li>
        </ul>
      </div>
    </>
  );
}
