import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Language } from '../../models/language';
import { PnotifyService } from '../../utils/pnotify.service';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  languages: [Language];
  language: Language = { id: 0} as Language;
  constructor(private router: Router, private pNotifyService: PnotifyService, private languageService: LanguageService) { }

  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this.languageService.list().subscribe(res => {
      this.languages = res.data;
    });
  }
  openAdd() {
    this.language = {id: 0} as Language;
    this.editModal.show();
  }
  openEdit(event, id) {
    event.preventDefault();
    this.languageService.get(id).subscribe(res => {
      this.language = res.data;
      this.editModal.show();
    });
  }
  delete(event, id) {
    event.preventDefault();
    this.pNotifyService.confirm('Confirm', 'Are you sure?', yes => {
      if (yes) {
        this.languageService.delete(id).subscribe( res => {
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
    this.languageService.save(this.language).subscribe( res => {
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
