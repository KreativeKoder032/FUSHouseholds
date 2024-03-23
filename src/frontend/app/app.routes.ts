import { Routes } from '@angular/router';
import { CreateHouseholdComponent } from './create-household/create-household.component';
import { CreateNewsComponent } from './create-news/create-news.component';

export const routes: Routes = [
  {
    path: 'create-household',
    component: CreateHouseholdComponent,
  },
  {
    path: 'add-news',
    component: CreateNewsComponent,
  }
];