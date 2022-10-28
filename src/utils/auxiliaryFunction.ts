export interface ProductCartDescription {
    id: number;
    title: string;
    image: string; 
    price: number;
    count: number;
  }
  
  export interface ProductGetDescription {
    id: number;
    title: string;
    image: string;
    price: number;
    description?: string;
  }  