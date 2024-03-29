import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { AuthModule } from '@sbs-def/auth';

@Module({
  imports: [BlogModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
