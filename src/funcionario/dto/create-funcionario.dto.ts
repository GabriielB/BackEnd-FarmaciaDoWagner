import { IsNotEmpty, IsNumber, isNotEmpty } from "class-validator"
export class CreateFuncionarioDto {
   
    @IsNotEmpty()
    nome: string

    @IsNotEmpty()
    cpf: string

    @IsNotEmpty()
    @IsNumber()
    salario: number
}
