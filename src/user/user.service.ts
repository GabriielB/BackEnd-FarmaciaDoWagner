import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {


  constructor(private prisma: PrismaService){}

  async create(data: CreateUserDto) {

    const userExiste = await this.prisma.user.findFirst({
        where: {
          email: data.email
        }
      })

    if(userExiste){
      throw new Error("Usuario ja esta cadastrado")
    }

    const user = await this.prisma.user.create({
      data,
    });

    return user
  }

  listarTodos() {
    return this.prisma.user.findMany();
  }

  listarUm(id: number) {
    return `ID:${id}`;
  }

  async atualizar(id: number, data: UpdateUserDto) {
    const userExiste = await this.prisma.user.findUnique({
      where: {id}
    })

    if(!userExiste){
      throw new Error("Esse livro não existe")
    }

    return await this.prisma.user.update({
      data, where: {id}
    })

  }

  async remover(id: number) {
    const userExiste = await this.prisma.user.findUnique({
      where: {id}
    })

    if(!userExiste){
      throw new Error("Esse livro não existe")
    }

    return await this.prisma.user.delete({where: {id}})
  }
}
