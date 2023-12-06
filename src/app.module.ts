import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts/post.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [PostsModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_DATABASE'),
          entities: [Post],
          synchronize: config.get<boolean>('DB_SYNCHRONIZE'),
        }
      }
    }), ConfigModule.forRoot({
      isGlobal: true,
    })],
  controllers: [AppController],
})
export class AppModule { }
