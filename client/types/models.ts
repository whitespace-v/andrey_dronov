export interface Group {
  id: number;
  title: string;
  description: string;
  src: string;
  created_at: string;
  updated_at?: any;
  series: Series[];
}
export interface Series {
  id: number;
  group_id: number;
  src: string;
  title: string;
  description: string;
  created_at: string;
  updated_at?: any;
  items: Item[];
}
export interface Item {
  id: number;
  title: string;
  count: number;
  price: number;
  description: string;
  created_at: string;
  updated_at?: any;
  series_id: number;
  group_id: number;
}
