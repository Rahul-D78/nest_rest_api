import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'get all items';
    }

    @Get(':id')
    findOne(@Param() param) {
      return `Item ${param.id}`;
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Body() updateItemdto: CreateItemDto, @Param('id') id): string {
        return `update ${id} - Name: ${updateItemdto.name}`
    }
}
