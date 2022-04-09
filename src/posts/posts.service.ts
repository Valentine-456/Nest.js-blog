import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postsRepository: typeof Post,
    private filesService: FilesService,
  ) {}

  async getAllPosts() {
    return await this.postsRepository.findAll({ include: { all: true } });
  }

  async createPost(dto: CreatePostDto, image: any) {
    const fileName = await this.filesService.createFile(image);
    const newPost = await this.postsRepository.create({
      ...dto,
      image: fileName,
    });
    return newPost;
  }
}
