import { Remedio } from '@prisma/client';
import { IsEmail, IsNotEmpty,} from 'class-validator';


export class CreateUserDto {
    

    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    cpf: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    
    

}
