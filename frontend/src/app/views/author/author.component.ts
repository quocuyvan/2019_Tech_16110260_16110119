import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Author } from '../../models/author';
import { PnotifyService } from '../../utils/pnotify.service';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  authors: [Author];
  author: Author = { id: 0} as Author;
  constructor(private router: Router, private pNotifyService: PnotifyService, private authorService: AuthorService) { }


  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this.authorService.list().subscribe(res => {
      this.authors = res.data;
    });
  }
  openAdd() {
    this.author = {id: 0} as Author;
    this.editModal.show();
  }
  openEdit(event, id) {
    event.preventDefault();
    this.authorService.get(id).subscribe(res => {
      this.author = res.data;
      this.editModal.show();
    });
  }
  delete(event, id) {
    event.preventDefault();
    this.pNotifyService.confirm('Confirm', 'Are you sure?', yes => {
      if (yes) {
        this.authorService.delete(id).subscribe( res => {
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
    this.authorService.save(this.author).subscribe( res => {
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
