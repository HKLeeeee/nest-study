import { Injectable, Inject } from '@nestjs/common';
import { MemberRepository } from './member.repository';
import { Member } from './interface';

@Injectable()
export class MemberService {
  // @Inject('MemberRepository')
  // private memberRepository: MemberRepository;
  constructor(private memberRepository: MemberRepository){};

  async create(member: Member): Promise<boolean> {
    if (await this.findByUserID(member.id)) {
      // 이미 존재하는 회원 정보일 경우
      return false;
    }
    await this.memberRepository.add(member);
    return true;
  }

  async findByUserID(userId: string): Promise<Member | false> {
    // 해당 정보의 멤버가 존재하면 member를 없으면 false를 리턴
    return (await this.memberRepository.findByUserId(userId)) ?? false;
  }

  async login(member: Member): Promise<string> {
    const result = await this.findByUserID(member.id);
    if (result === false) {
      return 'not exist member';
    }
    if (member.password === result.password) {
      return 'success';
    }
    return 'wrong password';
  }
}
