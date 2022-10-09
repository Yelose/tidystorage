import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { HomeComponent } from './pages/home/home.component';
import { NewItemComponent } from './pages/new-item/new-item.component';
import { NewStorageComponent } from './pages/new-storage/new-storage.component';
import { StorageComponent } from './pages/storage/storage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'edit-item/:id', component: EditItemComponent },
  { path: 'new-storage', component: NewStorageComponent },
  { path: 'new-item', component: NewItemComponent },
  { path: 'storage', component: StorageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
