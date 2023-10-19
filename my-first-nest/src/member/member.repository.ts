import { Injectable } from '@nestjs/common';
import { Member } from './interface';

@Injectable()
export class MemberRepository {
  db: Map<string, Member>;

  constructor() {
    this.db = new Map();
  }

  async findByUserId(userId: string) {
    return this.db.get(userId);
  }

  async add(member: Member) {
    this.db.set(member.id, member);
    console.log(this.db);
  }

  reset() {
    this.db = new Map();
  }
}

export default new MemberRepository();
