import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlyherComponent } from './containers/glyher/glyher.component';

const routes: Routes = [
  {
    path: 'glypher',
    component: GlyherComponent,
  },
  {
    path: '',
    redirectTo: 'glypher',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
