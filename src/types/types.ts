export type TProduct = {
    _id?: string;
    id?:string;
    name: string;
    category: string;
    description: string;
    price: number;
    stock: number;
    quantity: number;
    brand: string;
    rating: number;
    image: string;
  };



export interface ProductState  {
    cartItems: TProduct[];    
}

export type Inputs = {
  name: string
  category: string
  description: string
  price: string;
  stock: string;
  quantity: string;
  brand: string;
  rating: string;
  image:string;

}
