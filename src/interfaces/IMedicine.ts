export type IMedicine = {
  id: string;
  generic: {
    name: string;
  };
  dosage: string;
  image: string;
  name: string;
  brand: string;
  price: number;
  cost?: number;
  discountedPrice?: number;
  description?: string;
  type: string;
};
