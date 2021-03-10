import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './product.model';
import { ProductsService } from './products.service';


@Controller('odis/products')
@ApiTags("Products")
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }

    @Get()
    @ApiResponse({ type: Product, isArray: true, status: 200 })
    getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    @ApiResponse({ type: Product, status: 200 })
    @HttpCode(200)
    getProduct(@Param('id') prodId: string) {
        return this.productsService.getSingleProduct(prodId);
    }

    @Post()
    @ApiResponse({ type: Product, status: 201 })
    addProduct(@Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number) {
        const generatedId = this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice,
        );
        return { id: generatedId };
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number) {
        this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string) {
        this.productsService.deleteProduct(prodId);
        return null;
    }

}