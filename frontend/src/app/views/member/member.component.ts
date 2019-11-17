import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Member } from '../../models/member';
import { PnotifyService } from '../../utils/pnotify.service';
import { Router } from '@angular/router';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  members: [Member];
  member: Member = { id: 0} as Member;
  constructor(private router: Router, private pNotifyService: PnotifyService, private memberService: MemberService) { }

  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this.memberService.list().subscribe(res => {
      this.members = res.data;
    });
  }
  openAdd() {
    this.member = {id: 0} as Member;
    this.editModal.show();
  }
  openEdit(event, id) {
    event.preventDefault();
    this.memberService.get(id).subscribe(res => {
      this.member = res.data;
      this.editModal.show();
    });
  }
  delete(event, id) {
    event.preventDefault();
    this.pNotifyService.confirm('Confirm', 'Are you sure?', yes => {
      if (yes) {
        this.memberService.delete(id).subscribe( res => {
          if (res.errorCode === 0) {
            this.loadData();
          }
        });
      }
    });
  }
  hideModal() {
    this.editModal.hide();
  }
  save() {
    this.memberService.save(this.member).subscribe( res => {
      if (res.errorCode === 0) {
        this.pNotifyService.success('Info', 'Update successful!');
        this.editModal.hide();
        this.loadData();
      } else {
        this.pNotifyService.error('Error', 'Update failed!');
      }
    }, err => {
      this.pNotifyService.error('Error', 'Update failed!');
    });
  }

}
