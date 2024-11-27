import { CardType } from '../utils/type';
import { motion } from 'framer-motion';
import CardDetail from './CardDetail';
import { useState } from 'react';

type CardProps = {
  card: CardType;
};

export default function Card({ card }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardImageUrl = `/assets/cards/${card.id}.webp`;

  const handleClick = () => {
    setIsFlipped((curr) => !curr);
  };

  return (
    <div className="relative cursor-pointer">
      <motion.div
        className="rounded-lg shadow-xl shadow-yellow-700 border-orange-900 border-4"
        whileHover={isFlipped ? undefined : { scale: 1.2 }}
        onClick={handleClick}
        transition={{ duration: 0.7 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <img src={cardImageUrl} />
      </motion.div>
      {isFlipped && <CardDetail card={card} onCardDetailClick={handleClick} />}
    </div>
  );
}
