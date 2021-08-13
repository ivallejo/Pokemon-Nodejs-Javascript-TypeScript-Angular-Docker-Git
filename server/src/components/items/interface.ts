export interface Item {
  id: number;
  name: Name;
}

interface Name {
  english: string;
  japanese?: string;
  chinese?: string;
}