import { Module } from '@nestjs/common';
import { RemedioService } from './remedio.service';
import { RemedioController } from './remedio.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RemedioController],
  providers: [RemedioService, PrismaService],
})
export class RemedioModule {}
