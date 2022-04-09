import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getAllPosts() {
    return await this.postsService.getAllPosts();
  }

  @UseInterceptors(FileInterceptor('image'))
  @Post()
  async createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return await this.postsService.createPost(dto, image);
  }
}
