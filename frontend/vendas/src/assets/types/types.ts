export interface Product {
    id: string;
    name: string;
    image: string;
    description?: string;
    purchasePrice: number;
    salePrice: number;
    stock: number;
    minStock: number;
    category: "Porção" | "Bebida" | "Combo" | "Diversos";
    stockLocation?: string;
    generalInfo?: string;
    status?: boolean;
  }
  