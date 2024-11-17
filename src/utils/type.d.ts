export interface CardType {
  id: string;
  date: string;
  name: string;
  countries: Country[];
  cupNotes: string[];
  roastery: string;
}

interface Country {
  code: string;
  name: string;
}
