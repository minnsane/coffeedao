import { useEffect, useState } from 'react';

type LikeButtonProps = {
  cardId: string;
};

export default function LikeButton({ cardId }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likeListData = window.localStorage.getItem('coffee-dao-like-list');

    if (!likeListData) {
      return;
    }

    const likeList = JSON.parse(likeListData) as string[];

    setIsLiked(likeList.includes(cardId));
  }, []);

  const handleClick = () => {
    setIsLiked((curr) => !curr);
  };

  useEffect(() => {}, [isLiked]);

  return (
    <div className="float-right" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={isLiked ? 'fill-red-600 size-10' : 'stroke-red-600 size-10'}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </div>
  );
}
