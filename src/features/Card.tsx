import { useEffect, useState } from 'react';
import { CardType } from '../utils/type';

type CardProps = {
  card: CardType;
};

const getImageUrl = (id: string): string => {
  return `http://localhost:5173/assets/cards/${id}.webp`;
};

export default function Card({ card }: CardProps) {
  return (
    <div>
      <img src={getImageUrl(card.id)} />
    </div>
  );
}
