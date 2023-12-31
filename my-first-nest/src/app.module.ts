import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MemberModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
