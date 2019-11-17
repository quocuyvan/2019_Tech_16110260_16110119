import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Librarian } from '../../models/librarian';
import { PnotifyService } from '../../utils/pnotify.service';
import { Router } from '@angular/router';
import { LibrarianService } from '../../services/librarian.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.scss']
})
export class LibrarianComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  librarians: [Librarian];
  librarian: Librarian = { id: 0} as Librarian;
  constructor(private router: Router, private pNotifyService: PnotifyService, private librarianService: LibrarianService) { }

  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this.librarianService.list().subscribe(res => {
      this.librarians = res.data;
    });
  }
  openAdd() {
    this.librarian = {id: 0} as Librarian;
    this.editModal.show();
  }
  openEdit(event, id) {
    event.preventDefault();
    this.librarianService.get(id).subscribe(res => {
      this.librarian = res.data;
      this.editModal.show();
    });
  }
  delete(event, id) {
    event.preventDefault();
    this.pNotifyService.confirm('Confirm', 'Are you sure?', yes => {
      if (yes) {
        this.librarianService.delete(id).subscribe( res => {
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
    this.librarianService.save(this.librarian).subscribe( res => {
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
