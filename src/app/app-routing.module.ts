import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './list/ProductComponent';
import { ComponentsComponent } from './about/about.component';
const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'about/:id', component: ComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
