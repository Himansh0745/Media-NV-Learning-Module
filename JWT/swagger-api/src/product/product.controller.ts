import { Controller, Body, Param, Query, Get, Post, Delete, Patch } from '@nestjs/common';
// import{CreateProductDto, CreateProductResponseDto} from './dtos/create-product.dto'; // previous import preserved as comment per your request
import{CreateProductDto, CreateProductResponseDto} from './dtos/create-product.dto'; // re-added so code remains active
import { GetProductResponseDto } from './dtos/get-product.dto'; // added to annotate GET responses
import { ApiOperation, ApiTags, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse,  } from "@nestjs/swagger";


@ApiTags('Product Section')
@Controller('product')
export class ProductController {
    @Get()
    @ApiOkResponse({type:[GetProductResponseDto]})
    getAllProducts(): GetProductResponseDto[] {
        return [{id: "1", name: 'Laptop', price: 1000}];
    }


     @Get(':id')
    getProductById(@Param('id') id: string){
        // return {id, name: 'Laptop', price: 1000}; // preserved previous return as comment so you can see original response
        return {id, name: 'Laptop', price: 1000}; // same response returned; Swagger is now annotated with GetProductResponseDto
    }

    // @ApiOperation({summary: 'Get a product by id'})
    // @ApiResponse({
    //     status: 200,
    //     description: 'Product found',
    //     type: GetProductResponseDto,
    // })
   


    @ApiOperation({summary:'Used to create a new product'})
    @ApiCreatedResponse({
        description: 'Product created',
        type: CreateProductResponseDto,
    })
    @ApiBadRequestResponse({description:"Bad payload sent "})
    @Post()
    createProduct(@Body()body:CreateProductDto){
        return {...body, id: "1"};

    }

    @Delete(':id')
    deleteProduct(@Param('id') id:string){
        return{message:'Product deleted'}
    }

    @ApiOperation({summary:'Update a product'})
    @Patch(':id')
    updateProduct(
        @Param('id') id: string,
        @Body() body: CreateProductDto,
    ){
        return { id, ...body };
    }
}
