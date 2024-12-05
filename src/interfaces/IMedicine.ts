export type IMedicine = {
  id: string;
  generic: string;
  dosage: string;
  image: string;
  marketName: string;
  brand: string;
  price: number;
  cost?: number;
  discountedPrice?: number;
  description?: string;
  type: string;
};
