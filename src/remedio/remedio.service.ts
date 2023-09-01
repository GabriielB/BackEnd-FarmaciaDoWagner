import { Injectable } from '@nestjs/common';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';

@Injectable()
export class RemedioService {
  create(createRemedioDto: CreateRemedioDto) {
    return createRemedioDto;
  }

  listarTodos() {
    return `Listando todos os remedios`;
  }

  listarUm(id: number) {
    return `ID:${id}`;
  }

  atualizar(id: number, updateRemedioDto: UpdateRemedioDto) {
    return `Atualizando o remedio: ${id}`;
  }

  remover(id: number) {
    return `Removendo o remedio:  #${id}`;
  }
}
