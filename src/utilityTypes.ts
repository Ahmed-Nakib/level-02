// utility types


type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
}

// type ProductSummary = {
//     id: number;
//     name: string;
//     price: string;
// }


type ProductSummary = Pick<Product, "id" | "name" | "price">

type ProductWithoutStock = Omit<Product,  | "stock" | "color">

type ProductWithColor = Required<Product>

type OptionProduct = Partial<Product>;

type ReadOnlyProduct = Readonly<Product>;

const emptyObj : Record<string, unknown> = {};