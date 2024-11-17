import { CardType } from '../utils/type';
import { motion } from 'framer-motion';
import CardDetail from './CardDetail';
import { useState } from 'react';

type CardProps = {
  card: CardType;
};

export default function Card({ card }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardImageUrl = `http://localhost:5173/assets/cards/${card.id}.webp`;

  const handleClick = () => {
    setIsFlipped((curr) => !curr);
  };

  return (
    <>
      {isFlipped ? (
        <CardDetail card={card} imageUrl={cardImageUrl} />
      ) : (
        <motion.div whileHover={{ scale: 1.2 }} onClick={handleClick}>
          <img
            className="rounded-lg shadow-xl shadow-yellow-700 border-orange-900 border-4"
            src={cardImageUrl}
          />
        </motion.div>
      )}
    </>
  );
}
