import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./create-post.dto";

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private _postRepo: Repository<Post>) { }

    findAll(): Promise<Post[]> {
        return this._postRepo.find();
    }

    findOne(id: number): Promise<Post> {
        return this._postRepo.findOneBy({ id });
    }

    create(post: CreatePostDto): Promise<Post> {
        const newPost = this._postRepo.create(post);
        return this._postRepo.save(newPost);
    }
}