import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { UserComponent } from './views/user/user.component';
import { AppGuard } from './app.guard';
import { AuthorComponent } from './views/author/author.component';
import { SubjectComponent } from './views/subject/subject.component';
import { LanguageComponent } from './views/language/language.component';
import { PublisherComponent } from './views/publisher/publisher.component';
import { MemberComponent } from './views/member/member.component';
import { LibrarianComponent } from './views/librarian/librarian.component';
import { CardComponent } from './views/card/card.component';
import { BookLendingComponent } from './views/book-lending/book-lending.component';
import { BookItemComponent } from './views/book-item/book-item.component';
import { BookComponent } from './views/book/book.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    // canActivate: [AppGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'authors',
        component: AuthorComponent
      },
      {
        path: 'subjects',
        component: SubjectComponent
      },
      {
        path: 'languages',
        component: LanguageComponent
      },
      {
        path: 'publishers',
        component: PublisherComponent
      },
      {
        path: 'members',
        component: MemberComponent
      },
      {
        path: 'librarians',
        component: LibrarianComponent
      },
      {
        path: 'cards',
        component: CardComponent
      },
      {
        path: 'book-lending',
        component: BookLendingComponent
      },
      {
        path: 'book-item',
        component: BookItemComponent
      },
      {
        path: 'books',
        component: BookComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
