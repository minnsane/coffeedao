import { CardType } from '../utils/type';
import { motion } from 'framer-motion';

type CardProps = {
  card: CardType;
};

const getImageUrl = (id: string): string => {
  return `http://localhost:5173/assets/cards/${id}.webp`;
};

export default function Card({ card }: CardProps) {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <img
        className="rounded-lg shadow-xl shadow-yellow-700 border-orange-900 border-4"
        src={getImageUrl(card.id)}
      />
    </motion.div>
  );
}
