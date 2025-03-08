export type IService = {
  _id: number;
  icon: string;
  name: string;
  decription: string;
};

export type IServiceDetails = {
  _id: string;
  name: string;
  sub_category: {
    _id: string;
    name: string;
    category_id: {
      _id: string;
      name: string;
      description: string;
      icon: string;
    };
    banner_image: string;
  };
  price: number;
  general_cost: number;
  flat_discount: number;
  banner_image: string;
};
