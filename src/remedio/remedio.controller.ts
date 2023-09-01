import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RemedioService } from './remedio.service';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';

@Controller('remedio')
export class RemedioController {
  constructor(private readonly remedioService: RemedioService) {}

  @Post()
  create(@Body() createRemedioDto: CreateRemedioDto) {
    return this.remedioService.create(createRemedioDto);
  }

  @Get()
  findAll() {
    return this.remedioService.listarTodos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remedioService.listarUm(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRemedioDto: UpdateRemedioDto) {
    return this.remedioService.atualizar(+id, updateRemedioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remedioService.remover(+id);
  }
}
