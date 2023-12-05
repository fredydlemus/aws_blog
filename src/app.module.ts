import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts/post.entity';

@Module({
  imports: [PostsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'mysql',
      entities: [Post],
      synchronize: true,
    })],
  controllers: [AppController],
})
export class AppModule { }
