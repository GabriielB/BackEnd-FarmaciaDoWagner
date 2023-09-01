import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService {
  create(createFuncionarioDto: CreateFuncionarioDto) {
    return 'This action adds a new funcionario';
  }

  listarTodos() {
    return `Lista todos funcionario os funcionarios`;
  }

  listarUm(id: number) {
    return `Lista um funcionario #${id} funcionario`;
  }

  atualizar(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `Atualiza um funcionario #${id} funcionario`;
  }

  remover(id: number) {
    return `Remove um funcionario #${id} funcionario`;
  }
}
