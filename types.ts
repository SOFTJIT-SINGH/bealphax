export type ProductType = {
  id: number | string;
  title: string;
  shortDesc?: string;
  desc?: string;
  category?: string;
  price: number | string; // Allow string to handle form inputs safely
  img?: string | null;    // CHANGED BACK: Must be string to work with <Image src={...} />
  color?: string[];
  size?: string[];
  quantity?: number;      // Added this as it's used in CartItem
}