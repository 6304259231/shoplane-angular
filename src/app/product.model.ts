// product.model.ts
export interface Product {
    id: string;
    name: string;
    preview: string;
    photos: string[];
    description: string;
    isAccessory: boolean;
    brand: string;
    price: number;
  }
  