import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkDetailComponent } from './components/artwork-detail/artwork-detail.component';
import { ArtworkListComponent } from './components/artwork-list/artwork-list.component';

const routes: Routes = [
  { path: '', component: ArtworkListComponent },
  { path: 'artwork/:id', component: ArtworkDetailComponent },
  { path: '**', component: ArtworkListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
