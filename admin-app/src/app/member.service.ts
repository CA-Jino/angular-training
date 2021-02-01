import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService: MessageService) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 사원 일람 데이터를 취득했습니다.');
    return of(MEMBERS);
  }

  getMember(id: number): Observable<Member> {
    this.messageService.add(`MemberService: 社員データ(id=${id})を取得しました。`);
    return of(MEMBERS.find(member => member.id === id));
  }
}
