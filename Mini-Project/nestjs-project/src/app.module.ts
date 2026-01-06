import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; 
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService:ConfigService)=>{
            const host = configService.get<string>('DB_HOST');
            const portRaw = configService.get<string>('DB_PORT');
            const username = configService.get<string>('DB_USERNAME');
            const password = configService.get<string>('DB_PASSWORD');
            const database = configService.get<string>('DB_DATABASE');
            if (!host) throw new Error('DB_HOST is not set');
            if (!portRaw) throw new Error('DB_PORT is not set');
            const port = parseInt(portRaw, 10);
            if (Number.isNaN(port)) throw new Error('DB_PORT must be a number');
            if (typeof password !== 'string' || password.length === 0) throw new Error('DB_PASSWORD is not set or not a string');
            if (!username) throw new Error('DB_USERNAME is not set');
            if (!database) throw new Error('DB_DATABASE is not set');
            return {
                  type: 'postgres',
                  host,
                  port,
                  username,
                  password,
                  database,
                  autoLoadEntities: true,
                  synchronize: true
            };
      },
      inject:[ConfigService]
    }),
    UserModule,
    AuthModule,
    DoctorModule,
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
