import { Routes } from '@angular/router';
import { CreateHouseholdComponent } from './create-household/create-household.component';
import { ListHouseholdsComponent } from './list-households/list-households.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { CreatePhotoComponent } from './create-photo/create-photo.component';
import { ListPhotosComponent } from './list-photos/list-photos.component';
import { ListNewsComponent } from './list-news/list-news.component';

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
    path: 'list-news',
    component: ListNewsComponent,
  },
  {
    path: 'list-households',
    component: ListHouseholdsComponent,
  },
  {
    path: 'create-photo',
    component: CreatePhotoComponent,
  },
  {
    path: 'list-photos',
    component: ListPhotosComponent,
  }
];