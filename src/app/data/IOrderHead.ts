export interface IOrderHead {
  id_order: number | null;
  id_client: number | null;
  insert_date: string | null;
  accept_date: string | null;
  ship_date: string | null;
  street: string | null;
  city: string | null;
  zip_code: string | null;
  nation: string | null;
  cancel_date: string | null;
}
