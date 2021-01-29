import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  selectedMember: Member;

  constructor(
    private memberService: MemberService,
    private messageService: MessageService
  ) { }

  // life cycle method；コンポーネントが初期化される際に実行されるメソッド
  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
    this.messageService.add(`MembersComponent: 사원데이터(id=${member.id})가 선택되었습니다.`);
  }

  getMembers(): void {
    this.memberService.getMembers()  // Observable
    .subscribe(members => this.members = members);
  }

}
