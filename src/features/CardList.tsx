import { useEffect, useState } from 'react';
import { Card } from '../utils/type';

function CardList() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5173/data.json');

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
      <div className="container mx-auto columns-3">
        {cards.map((card) => (
          <h1>{card.name}</h1>
        ))}
      </div>
    </>
  );
}

export default CardList;
