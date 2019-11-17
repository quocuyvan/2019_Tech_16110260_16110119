import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Publisher } from '../../models/publisher';
import { PnotifyService } from '../../utils/pnotify.service';
import { Router } from '@angular/router';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  publishers: [Publisher];
  publisher: Publisher = { id: 0} as Publisher;
  constructor(private router: Router, private pNotifyService: PnotifyService, private publisherService: PublisherService) { }

  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this.publisherService.list().subscribe(res => {
      this.publishers = res.data;
    });
  }
  openAdd() {
    this.publisher = {id: 0} as Publisher;
    this.editModal.show();
  }
  openEdit(event, id) {
    event.preventDefault();
    this.publisherService.get(id).subscribe(res => {
      this.publisher = res.data;
      this.editModal.show();
    });
  }
  delete(event, id) {
    event.preventDefault();
    this.pNotifyService.confirm('Confirm', 'Are you sure?', yes => {
      if (yes) {
        this.publisherService.delete(id).subscribe( res => {
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
    this.publisherService.save(this.publisher).subscribe( res => {
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
