import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: '/wrapper', pathMatch: 'full' },
  { path: 'wrapper', component: WrapperComponent },
  // { path: '**', component: PageNotFoundComponent }
  { path: '**', redirectTo: '/wrapper' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
