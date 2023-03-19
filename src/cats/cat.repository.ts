import { CatRequestDto } from './../dto/cat.request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cats.schema';
import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CatsRepository {
  constructor(
    @InjectModel(Cat.name)
    private readonly catModel: Model<Cat>,
  ) {}

  async existsByEmail(email: string): Promise<boolean> {
    try {
      const result = await this.catModel.exists({ email });
      if (result) return true;
      else return false;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  async create(cat: CatRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }

  async findCatByEmail(email: string): Promise<Cat | null> {
    const cat = await this.catModel.findOne({ email });
    return cat;
  }

  async findCatByIdWithoutPassword(id: string): Promise<Cat | null> {
    const cat = await this.catModel.findById(id).select('-password');
    return cat;
  }
}
