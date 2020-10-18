import { Controller, Get, Post, Put, Delete, Body, Param, Dependencies } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';


@Controller('items')

// Before using the service i have to inject it as a Dependency

export class ItemsController {

    // within the class add a constructor does not need anything in the constructor body but the parameaters where we 
    // inject the dependencies

    constructor(private readonly itemsService: ItemsService) {
        
    }

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
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
