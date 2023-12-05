import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { PostsService } from "./post.service";

@Module({
    controllers: [PostsController],
    imports: [TypeOrmModule.forFeature([Post])],
    providers: [PostsService],
})
export class PostsModule { }