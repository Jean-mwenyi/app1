import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { AuthModule } from '@sbs-def/auth';

@Module({
  //imports: [AuthModule],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
