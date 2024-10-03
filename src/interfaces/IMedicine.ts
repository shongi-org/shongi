export type IMedicine = {
  id: number;
  generic: string;
  dosage: string;
  image: string;
  marketName: string;
  brand: string;
  price: number;
  cost?: number;
  discountedPrice?: number;
  description?: string;
};
