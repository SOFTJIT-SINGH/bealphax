export type ProductType = {
  id: number | string;
  title: string;
  shortDesc: string;
  desc: string;
  category: string;
  price: number;
//   img?: string | null;
  img?: Record<string, string> | null; // Updated to support multiple images
  color?: string[];
  size?: string[];

}