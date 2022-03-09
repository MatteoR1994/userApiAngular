import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SingleUserPageComponent } from './components/single-user-page/single-user-page.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: '/wrapper', pathMatch: 'full' },
  { path: 'user/:id', component: SingleUserPageComponent },
  // { path: '**', component: PageNotFoundComponent }
  { path: '**', component: WrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
