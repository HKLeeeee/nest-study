import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { MemberRepository } from './member.repository';

@Module({
    imports: [],
    controllers: [MemberController],
    providers: [
        MemberService,
        MemberRepository,
        {
            provide : 'MemberService',
            useClass : MemberService, // 상수 주입시에는 userValue
        },
        {
            provide : 'MemberRepository',
            useClass :MemberRepository 
        }

    ],
  })
export class MemberModule {}
  