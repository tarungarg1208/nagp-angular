export interface Product{
    id: number,
    name: string,
    description: string,
    price: number
}
export interface ProductCart{
    product: Product,
    qty: number,
    amount: number
}