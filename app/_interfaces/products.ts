export interface Products {
  id?: number;
  name: string;
  description?: string;
  price: number;
  color?: string;
  availableSizes?: string[];
  stock?: number;
  img: string[];
  category?: string;
}
