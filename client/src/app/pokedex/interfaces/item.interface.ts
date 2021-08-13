export interface ItemResponse {
  error: string;
  body: Item[];
}

export interface Item {
  id: number;
  name: Name;
}

interface Name {
  english: string;
  japanese?: string;
  chinese?: string;
}
