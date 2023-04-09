import { AuthModule } from './../auth/auth.module';
import { CatsRepository } from './cat.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { forwardRef, Module } from '@nestjs/common';
import { CatsController } from './controller/cats.controller';
import { CatsService } from './services/cats.service';
import { Cat, CatSchema } from './cats.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
