import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  member = '김진호';

  constructor() { }

  // life cycle method.
  ngOnInit(): void {
  }

}
