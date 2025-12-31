import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiCreatedResponse, ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { CreateOrderRequestDto, OrderResponseDto } from './dtos/order.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
    @Get()
    @ApiOperation({ summary: 'List orders', description: 'Retrieve all existing orders.' })
    @ApiOkResponse({ type: [OrderResponseDto] })
    getAllOrders(): OrderResponseDto[] {
        return [{id: '1', productID: '1', quantity: 2}]
    }

    @Post()
    @ApiOperation({ summary: 'Create order', description: 'Create a new order for a product.' })
    @ApiBody({ type: CreateOrderRequestDto })
    @ApiCreatedResponse({ type: OrderResponseDto })
    createOrder(@Body() body: CreateOrderRequestDto): OrderResponseDto {
        return { ...body, id: '1' } as OrderResponseDto;
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update order', description: 'Update an existing order by id.' })
    @ApiBody({ type: CreateOrderRequestDto })
    @ApiOkResponse({ type: OrderResponseDto })
    updateOrder(@Param('id') id: string, @Body() body: CreateOrderRequestDto): OrderResponseDto {
        return { ...body, id } as OrderResponseDto;
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete order', description: 'Delete an order by id.' })
    @ApiOkResponse({ type: OrderResponseDto })
    deleteOrder(@Param('id') id: string): any {
        return { message: 'Order deleted', id };
    }
}
