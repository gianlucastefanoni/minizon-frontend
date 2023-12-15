import { ICartHead } from './ICartHead';
import { IProduct } from './IProduct';

export interface MyCart extends ICartHead {
  products: MyProduct[];
}

export interface MyProduct extends IProduct {
  qty: number | null;
}
