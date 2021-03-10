import { ApiProperty } from "@nestjs/swagger";

export class Product {

    @ApiProperty({
        type: 'string',
        name: 'id',
        description: 'id of Product'
    })
    id: string;

    @ApiProperty({
        type: 'string',
        name: 'title',
        description: 'title of Product'
    })
    title: string;

    @ApiProperty({
        type: 'string',
        name: 'description',
        description: 'description of Product'
    })
    description: string;

    @ApiProperty({
        type: 'string',
        name: 'price',
        description: 'price of Product'
    })
    price: number;



    constructor(
        id: string,
        title: string,
        description: string,
        price: number,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }
}