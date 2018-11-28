import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedsListComponent } from './feeds/feeds-list/feeds-list.component';
import { FeedSingleComponent } from './feeds/feed-single/feed-single.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/feeds',
    pathMatch: 'full'
  },
  {
    path: 'feeds',
    component: FeedsComponent,
    children: [
      {
        path: '',
        component: FeedsListComponent
      },
      {
        path: ':id',
        component: FeedSingleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
