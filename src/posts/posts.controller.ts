import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostsService } from "./post.service";
import { CreatePostDto } from "./create-post.dto";

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) { }

    @Get()
    getPosts() {
        return this.postsService.findAll();
    }

    @Post()
    createPost(@Body() payload: CreatePostDto) {
        return this.postsService.create(payload);
    }
}