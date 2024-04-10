import { Routes } from '@angular/router';
import { CreateHouseholdComponent } from './create-household/create-household.component';
import { ListHouseholdsComponent } from './list-households/list-households.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { CreatePhotoComponent } from './create-photo/create-photo.component';

export const routes: Routes = [
  {
    path: 'create-household',
    component: CreateHouseholdComponent,
  },
  
  {
    path: 'create-news',
    component: CreateNewsComponent,
  },
  {
    path: 'list-households',
    component: ListHouseholdsComponent,
  },
  {
    path: 'create-photo',
    component: CreatePhotoComponent,
  }
];