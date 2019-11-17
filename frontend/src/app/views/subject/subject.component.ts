import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Subject } from '../../models/subject';
import { PnotifyService } from '../../utils/pnotify.service';
import { Router } from '@angular/router';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  subjects: [Subject];
  subject: Subject = { id: 0} as Subject;
  constructor(private router: Router, private pNotifyService: PnotifyService, private subjectService: SubjectService) { }

  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this.subjectService.list().subscribe(res => {
      this.subjects = res.data;
    });
  }
  openAdd() {
    this.subject = {id: 0} as Subject;
    this.editModal.show();
  }
  openEdit(event, id) {
    event.preventDefault();
    this.subjectService.get(id).subscribe(res => {
      this.subject = res.data;
      this.editModal.show();
    });
  }
  delete(event, id) {
    event.preventDefault();
    this.pNotifyService.confirm('Confirm', 'Are you sure?', yes => {
      if (yes) {
        this.subjectService.delete(id).subscribe( res => {
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
    this.subjectService.save(this.subject).subscribe( res => {
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
