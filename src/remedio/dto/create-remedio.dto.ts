import { IsNotEmpty,IsNumber } from 'class-validator';

export class CreateRemedioDto {
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    @IsNumber()
    valor: number;

    @IsNotEmpty()
    dosagem: string;

}