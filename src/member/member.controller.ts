import { Controller, Post, Body, Inject, Res} from '@nestjs/common';
import { Member } from './interface';
import { MemberService } from './member.service';
import { Response } from 'express'

@Controller('/member')
export class MemberController {
  @Inject('MemberService')
  private memberService: MemberService;
  // constructor(private memberService: MemberService){};

  @Post('/create')
  signUp(@Body() member: Member, @Res() res: Response) {
    try {
      this.memberService.create(member);
    } catch (error) {
      console.log(error)
    }
    return res.status(200).json({message: "회원가입"});
  }
}
