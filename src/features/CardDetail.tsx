import { useEffect, useState } from 'react';
import { CardType } from '../utils/type';

type CardDetailProps = {
  card: CardType;
  onCardDetailClick: () => void;
};

const getCountryFlagImageUrl = (code: string): string => {
  return `https://flagsapi.com/${code}/flat/64.png`;
};

export default function CardDetail({
  card,
  onCardDetailClick,
}: CardDetailProps) {
  const [isCardDetailDisplayed, setIsCardDetailDisplayed] =
    useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCardDetailDisplayed(true);
    }, 500);

    card.countries.forEach(({ code }) => {
      const img = new Image();
      img.src = getCountryFlagImageUrl(code);
    });

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isCardDetailDisplayed && (
        <div onClick={onCardDetailClick}>
          <div className="absolute bg-black/70 inset-[2px] blur-sm shadow-sm"></div>
          <div className="absolute inset-10">
            <div className="grid grid-cols-3 gap-2">
              {card.countries.map((country) => (
                <img
                  key={country.code}
                  src={getCountryFlagImageUrl(country.code)}
                />
              ))}
            </div>

            <ul className="text-zinc-100">
              <li className="pb-1">{card.date}</li>
              <li className="pb-1">{card.name}</li>
              <li className="pb-1">{card.roastery}</li>
              <li className="pb-1">{card.cupNotes.join(', ')}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
