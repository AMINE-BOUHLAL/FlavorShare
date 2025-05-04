import { Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {DetailsComponent} from './detail/detail.component';
import {AddFormComponent} from './add-form/add-form.component';

export const routes: Routes = [
  {path: '', component : AccueilComponent},
  {path: 'accueil', component : AccueilComponent},

  {path: 'details/:id', component:DetailsComponent},
  {path: 'addForm' , component: AddFormComponent}
];
