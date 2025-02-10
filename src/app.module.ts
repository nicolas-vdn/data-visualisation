import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phished } from './phished.entity';
import { Employee } from './employee.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.SQL_HOST,
      port: 3306,
      username: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE,
      entities: [Phished, Employee],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Phished, Employee]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
