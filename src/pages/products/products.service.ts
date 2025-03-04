import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';


@Injectable()
export class ProductsService {

    private products: Product[] = [];

    async getProducts(): Promise<Product[]> {
        return [...this.products];
    }

    async getSingleProduct(productId: string): Promise<Product> {
        const product = this.findProduct(productId)[0];
        return { ...product };
    }

    async insertProduct(title: string, desc: string, price: number): Promise<any> {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    updateProduct(productId: string, title: string, desc: string, price: number) {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = { ...product };
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }

    deleteProduct(prodId: string) {
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Could not find product. ID: ' + id);
        }
        return [product, productIndex];
    }

}