export type Links = {
  label: string;
  href: string;
};

export type Pricing = {
  label: string;
  price: number;
  state: string;
};

export type ImageType = {
  alt: string;
  url: string;
};

export type Review = {
  name: string;
  nickname: string;
  avatar: string;
  review: string;
};

export type Service = {
  label: string;
  content: string;
  price: number;
  state: string;
};

export type VipPlanType = {
  period: string;
  periodType: string;
  label: string;
  labelContent: string;
  price: number;
  content: string;
  discount: string;
};
