export type SkipItem = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: null | number;
  per_tonne_cost: null | number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: null | string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};
