export interface IRoute {
  id: number;
  names: string[];
  distance: number;
  defaultPrice: number;
  type: string;
  geo: number[][]
}