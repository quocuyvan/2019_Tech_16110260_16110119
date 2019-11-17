import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';
import { CookieService } from 'ngx-cookie-service';
// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { UserComponent } from './views/user/user.component';
import { AppGuard } from './app.guard';
// import { AppInterceptor } from './app.interceptor';
import { ModalModule } from 'ngx-bootstrap';
import { AuthorComponent } from './views/author/author.component';
import { SubjectComponent } from './views/subject/subject.component';
import { LanguageComponent } from './views/language/language.component';
import { PublisherComponent } from './views/publisher/publisher.component';
import { MemberComponent } from './views/member/member.component';
import { LibrarianComponent } from './views/librarian/librarian.component';
import { CardComponent } from './views/card/card.component';
import { BookLendingComponent } from './views/book-lending/book-lending.component';
import { BookItemComponent } from './views/book-item/book-item.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BookComponent } from './views/book/book.component';
import { TestComponent } from './views/test/test.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    NgxDatatableModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    UserComponent,
    AuthorComponent,
    SubjectComponent,
    LanguageComponent,
    PublisherComponent,
    MemberComponent,
    LibrarianComponent,
    CardComponent,
    BookLendingComponent,
    BookItemComponent,
    BookComponent,
    TestComponent,
    // CustomerTypeEditComponent
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AppInterceptor,
  //   multi: true
  // },
    CookieService,
    AppGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
