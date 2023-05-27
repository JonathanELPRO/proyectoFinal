import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PfModule } from './pf/pf.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [PfModule,
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'pf',
        synchronize: true,
        autoLoadEntities:true,
      }
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
