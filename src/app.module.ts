import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { DonantesModule } from './donantes/donantes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { SeederModule } from './seeder/seeder.module';
import { NoticiaModule } from './noticias/noticia.module';
import { SugerenciaModule } from './suggestion/suggestion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST', 'localhost'),
        port: parseInt(configService.get<string>('DATABASE_PORT', '3306'), 10),
        username: configService.get<string>('DATABASE_USER', 'root'),
        password: configService.get<string>('DATABASE_PASSWORD', ''),
        database: configService.get<string>('DATABASE_NAME', 'bomberosNosara'),
        synchronize: true,
        dropSchema: true,
        autoLoadEntities: true,
      }),
    }),

    DonantesModule,
    NoticiaModule,
    AuthModule,
    UsersModule,
    RolesModule,
    SeederModule,
    SugerenciaModule,
  ],
})
export class AppModule {}

