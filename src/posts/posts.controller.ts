import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostsService } from "./post.service";

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) { }

    @Get()
    getPosts() {
        return this.postsService.findAll();
    }

    @Post()
    createPost(@Body() payload: any) {
        return this.postsService.create(payload);
    }
}