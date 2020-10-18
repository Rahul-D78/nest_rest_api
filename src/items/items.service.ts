import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
     
    {
    id: "412452352",
    name: "item one",
    description: "This is item one",
    qty: 10
    },
    
    {
    id: "41249324",
    name: "item two",
    description: "This is item two",
    qty: 20
    },
  ];

   findAll(): Item[] {
       return this.items;
   }

   findOne(id: string): Item {
     return this.items.find(item => item.id === id);
   }
}
