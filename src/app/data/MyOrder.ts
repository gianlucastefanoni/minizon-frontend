import { IOrderHead } from './IOrderHead';

export interface MyOrder extends IOrderHead {
  price: number | null;
}
