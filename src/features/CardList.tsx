import { useEffect, useState } from 'react';
import { CardType } from '../utils/type';
import Card from './Card';

export default function CardList() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');

      if (!response.ok) {
        setCards([]);

        return;
      }

      const list = await response.json();

      setCards(list.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-4 gap-20">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}
