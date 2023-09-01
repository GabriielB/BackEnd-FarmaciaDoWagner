import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RemedioModule } from './remedio/remedio.module';
import { UserModule } from './user/user.module';
import { FuncionarioModule } from './funcionario/funcionario.module';

@Module({
  imports: [RemedioModule, UserModule, FuncionarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
