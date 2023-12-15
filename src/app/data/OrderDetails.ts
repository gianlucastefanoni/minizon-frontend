import { IOrderHead } from './IOrderHead';
import { MyProduct } from './MyCart';

export interface OrderDetails extends IOrderHead {
  products: MyProduct[];
}
