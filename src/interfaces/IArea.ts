export type IArea = {
  _id: string;
  detail: string;
  area: string;
  geocode: {
    lat: number;
    long: number;
  };
  barikoi_id?: number;
};
