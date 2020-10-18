import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
 

   async findAll(): Promise<Item[]> {
       return await this.itemModel.find();
   }

   async findOne(id: string): Promise<Item> {
     //_id --> object id (default for mongodb)
     return await this.itemModel.findOne({ _id: id});
   }
}
